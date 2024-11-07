import { Box, Container, Grid, Typography, Stack, Card } from "@mui/material";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

export default function Highlights() {
  const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
    {
      icon: <AutoFixHighRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
    {
      icon: <QueryStatsRoundedIcon />,
      title: "Placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis vitae dolorum magni nobis doloremque, minus, consectetur exercitationem tenetur fugit cum corrupti dolor dignissimos id voluptatibus consequatur quasi nulla vel.",
    },
  ];
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Placeholder
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
