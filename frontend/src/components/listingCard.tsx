import { useState, type CSSProperties } from "react";
import {
  Heart,
  MapPin,
  Gauge,
  Fuel,
  Cog,
  Car,
  ImageIcon,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
 *  ListingCard — self-contained, NO Tailwind required.
 *  All styling is inline, so it renders as a real card even if
 *  your project has no CSS framework set up.
 *
 *  It also reads fields flexibly: it accepts both camelCase
 *  (bodyType) and snake_case (body_type), and turns string
 *  numbers ("5000") into real numbers — so it works with a
 *  typical Django REST serializer without you renaming anything.
 * ──────────────────────────────────────────────────────────── */

export interface Listing {
  id: number | string;
  [key: string]: any; // tolerate whatever your API sends
}

export interface ListingCardProps {
  listing: Listing;
  saved?: boolean;
  onToggleSave?: (listing: Listing) => void;
  onClick?: (listing: Listing) => void;
}

/* read the first key that exists, e.g. pick(v, "bodyType", "body_type") */
const pick = (obj: any, ...keys: string[]) => {
  for (const k of keys) {
    if (obj?.[k] !== undefined && obj?.[k] !== null && obj?.[k] !== "") return obj[k];
  }
  return undefined;
};

const toNum = (v: any): number | undefined => {
  if (typeof v === "number") return v;
  if (typeof v === "string" && v.trim() !== "" && !isNaN(Number(v))) return Number(v);
  return undefined;
};

const currency = (n?: number) =>
  typeof n === "number"
    ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
    : "Price on request";

const miles = (n?: number) =>
  typeof n === "number" ? `${n.toLocaleString("en-US")} mi` : "—";

/* "Listed 3 days ago" from an ISO date string like "2026-08-22T14:00:00Z" */
const timeAgo = (dateStr?: string): string | undefined => {
  if (!dateStr) return undefined;
  const then = new Date(dateStr).getTime();
  if (isNaN(then)) return undefined;
  const secs = Math.floor((Date.now() - then) / 1000);
  const units: [number, string][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4.34, "week"],
    [12, "month"],
    [Infinity, "year"],
  ];
  let n = secs;
  let unit = "second";
  for (const [size, name] of units) {
    if (n < size) { unit = name; break; }
    n = Math.floor(n / size);
    unit = name;
  }
  if (unit === "second" && n < 60) return "Listed just now";
  return `Listed ${n} ${unit}${n === 1 ? "" : "s"} ago`;
};

const conditionColor: Record<string, { bg: string; fg: string }> = {
  New: { bg: "#ecfdf5", fg: "#047857" },
  Certified: { bg: "#eff6ff", fg: "#1d4ed8" },
  Used: { bg: "#f1f5f9", fg: "#475569" },
};

/* ─── styles ──────────────────────────────────────────────── */
const s: Record<string, CSSProperties> = {
  card: {
    width: "100%",
    maxWidth: 360,
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    cursor: "pointer",
    transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  cardHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.10)",
    borderColor: "#cbd5e1",
  },
  imgWrap: {
    position: "relative",
    aspectRatio: "4 / 3",
    background: "linear-gradient(135deg,#f1f5f9,#e2e8f0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
  },
  photoCount: {
    position: "absolute",
    bottom: 12,
    left: 12,
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 8px",
    borderRadius: 999,
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 500,
  },
  heart: {
    position: "absolute",
    top: 12,
    right: 12,
    display: "grid",
    placeItems: "center",
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "rgba(255,255,255,0.92)",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
  },
  body: { padding: 16, display: "flex", flexDirection: "column", gap: 12, flex: 1 },
  titleRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 },
  title: { fontSize: 17, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 },
  trim: { fontSize: 14, color: "#64748b", margin: "2px 0 0" },
  posted: { fontSize: 12, color: "#94a3b8", margin: "4px 0 0" },
  price: { fontSize: 18, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap" },
  specGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px 16px",
    borderTop: "1px solid #f1f5f9",
    paddingTop: 12,
  },
  spec: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 },
  specText: { fontSize: 14, color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, fontSize: 14, marginTop: "auto" },
  meta: { display: "flex", alignItems: "center", gap: 4, color: "#64748b", minWidth: 0 },
  dealer: { display: "flex", alignItems: "center", gap: 4, color: "#475569", fontWeight: 500 },
};

function Spec({ icon: Icon, value }: { icon: LucideIcon; value: string }) {
  return (
    <div style={s.spec}>
      <Icon size={16} strokeWidth={1.75} color="#94a3b8" style={{ flexShrink: 0 }} />
      <span style={s.specText} title={value}>{value}</span>
    </div>
  );
}

export default function ListingCard({ listing, saved = false, onToggleSave, onClick }: ListingCardProps) {
  const [hover, setHover] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const year = pick(listing, "year");
  const make = pick(listing, "make");
  const model = pick(listing, "model");
  const trim = pick(listing, "trim");
  const price = toNum(pick(listing, "price"));
  const mileage = toNum(pick(listing, "mileage"));
  const transmission = pick(listing, "transmission");
  const fuel = pick(listing, "fuel", "fuel_type");
  const bodyType = pick(listing, "bodyType", "body_type");
  const condition = pick(listing, "condition");
  const location = pick(listing, "location", "city");
  const dealerName = pick(listing, "dealer")?.name ?? pick(listing, "dealer_name");
  const dealerVerified = pick(listing, "dealer")?.verified;
  const photo = pick(listing, "photo", "image", "primary_photo");
  const photoCount = toNum(pick(listing, "photoCount", "photo_count"));
  const posted = timeAgo(pick(listing, "created_at", "listed_at", "date_posted", "created"));

  const title = [year, make, model].filter(Boolean).join(" ") || "Vehicle";
  const cond = condition ? conditionColor[condition] ?? conditionColor.Used : null;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick?.(listing)}
      style={{ ...s.card, ...(hover ? s.cardHover : null) }}
    >
      <div style={s.imgWrap}>
        {photo && imgOk ? (
          <img src={photo} alt={title} loading="lazy" onError={() => setImgOk(false)} style={s.img} />
        ) : (
          <Car size={48} strokeWidth={1.25} color="#cbd5e1" />
        )}

        {cond && (
          <span style={{ ...s.badge, background: cond.bg, color: cond.fg }}>{condition}</span>
        )}

        {typeof photoCount === "number" && photoCount > 0 && (
          <span style={s.photoCount}>
            <ImageIcon size={14} strokeWidth={2} /> {photoCount}
          </span>
        )}

        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save listing"}
          onClick={(e) => { e.stopPropagation(); onToggleSave?.(listing); }}
          style={s.heart}
        >
          <Heart size={20} strokeWidth={2} fill={saved ? "#ef4444" : "none"} color={saved ? "#ef4444" : "#475569"} />
        </button>
      </div>

      <div style={s.body}>
        <div style={s.titleRow}>
          <div style={{ minWidth: 0 }}>
            <h3 style={s.title}>{title}</h3>
            {trim && <p style={s.trim}>{trim}</p>}
            {posted && <p style={s.posted}>{posted}</p>}
          </div>
          <span style={s.price}>{currency(price)}</span>
        </div>

        <div style={s.specGrid}>
          <Spec icon={Gauge} value={miles(mileage)} />
          <Spec icon={Cog} value={transmission ?? "—"} />
          <Spec icon={Fuel} value={fuel ?? "—"} />
          <Spec icon={Car} value={bodyType ?? "—"} />
        </div>

        {(location || dealerName) && (
          <div style={s.footer}>
            {location && (
              <span style={s.meta}>
                <MapPin size={16} strokeWidth={1.75} color="#94a3b8" style={{ flexShrink: 0 }} />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{location}</span>
              </span>
            )}
            {dealerName && (
              <span style={s.dealer}>
                {dealerVerified && <BadgeCheck size={16} strokeWidth={2} color="#2563eb" />}
                {dealerName}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
