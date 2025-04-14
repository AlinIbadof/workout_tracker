import { Box } from "@mui/material";
import { AvatarSelection } from "./";

const Profile = () => {
  return (
    <Box
      className="flex flex-col items-center"
      sx={{ paddingTop: "10px", height: "100%", width: "100%" }}
    >
      <AvatarSelection />
    </Box>
  );
};

export default Profile;
