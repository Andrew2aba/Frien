// theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",                    // pick ONE — light or dark, not both
    background: { default: "#FBFAF7", paper: "#FFFFFF" },
    primary:   { main: "#6B7A5E" },   // sage — replaces the default blue
    secondary: { main: "#C96F4A" },   // clay accent
    text: { primary: "#1A1A17", secondary: "#6B6B63" },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    h1: { fontFamily: "Space Grotesk, sans-serif", fontWeight: 500 },
    h2: { fontFamily: "Space Grotesk, sans-serif", fontWeight: 500 },
    button: { textTransform: "none" },  // kills the SHOUTY ALL-CAPS buttons
  },
  shape: { borderRadius: 10 },
});