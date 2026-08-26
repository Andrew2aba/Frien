import { Avatar, Button, Box, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import TopNavBar from "../components/TopNavBar";
import disableGutters from "../components/TopNavBar";

const stats = [
  { value: "4.9", label: "rating · 288 reviews", star: true },
  { value: "312", label: "items sold" },
  { value: "~2h", label: "avg. reply time" },
  { value: "99%", label: "on-time shipping" },
];

const ProfilePage = () => {
  return (
    <Box
        
      sx={{ bgcolor: "background.default", minHeight: "100vh", color: "text.primary" }}>
      <title>Profile Page</title>
      
      <TopNavBar />

      {/* Identity block */}
      <Box
        component="section"
        sx={{
          maxWidth: 1240,
          mx: "auto",
          px: { xs: 3, md: 5 },
          pt: 5,
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 3, md: 4 },
          flexWrap: "wrap",
        }}
      >
        <Avatar
          sx={{
            width: 110,
            height: 110,
            bgcolor: "#E8E6DF",
            color: "primary.main",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 34,
            fontWeight: 500,
          }}
        >
          RM
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 240 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography variant="h2">@ridge.made</Typography>
            <VerifiedIcon sx={{ fontSize: 22, color: "primary.main" }} aria-label="Verified seller" />
          </Stack>
          <Typography sx={{ mt: 0.5, color: "text.secondary", fontSize: 14 }}>
            Portland, OR · joined 2023 · 1.2k followers
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 460, lineHeight: 1.55 }}>
            Vintage denim &amp; workwear — restocked weekly, ships within one day.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ flexShrink: 0 }}>
          <Button variant="contained" color="primary">
            Follow
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "text.primary",
              borderColor: "text.primary",
              "&:hover": { borderColor: "text.primary", bgcolor: "#F3F1EA" },
            }}
          >
            Message
          </Button>
        </Stack>
      </Box>

      {/* Trust bar — the signature element */}
      <Box
        sx={{
          maxWidth: 1040,
          mx: "auto",
          mt: 3,
          px: { xs: 3, md: 5 },
        }}
      >
        <Stack
          direction="row"
          divider={<Box sx={{ width: "1px", bgcolor: "#D8D6CE" }} />}
          sx={{
            bgcolor: "#F3F1EA",
            border: "1px solid #E2E0D8",
            borderRadius: 3,
            py: 2.5,
          }}
        >
          {stats.map((s) => (
            <Box key={s.label} sx={{ flex: 1, textAlign: "center" }}>
              <Stack
                direction="row"
                spacing={0.5}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                {s.star && <StarIcon sx={{ fontSize: 22, color: "secondary.main" }} />}
                <Typography
                  sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 500 }}
                >
                  {s.value}
                </Typography>
              </Stack>
              <Typography sx={{ mt: 0.5, color: "text.secondary", fontSize: 13 }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfilePage;
