import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {

  const themeColors = useTheme();

  return (
    <Box
      component="footer"
      height="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ bgcolor: themeColors.header.backgroundColor, color: themeColors.header.color }}
    >
      <Typography variant="body1">2024, Github</Typography>
    </Box>
  );
}
