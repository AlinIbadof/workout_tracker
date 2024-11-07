import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 4, sm: 8 },
          width: "100%",
        }}
      >
        <div>
          <Typography>Made with love by @AlinIbadof</Typography>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alinibadof"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alin-ibadof/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
