import { useUserStore } from "@/store/UserStore";
import { fetchAvatars, saveAvatar, getSelectedAvatarUrl } from "@/utils/avatarUtils";
import { Box, Grid, IconButton, Avatar, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useStore } from "zustand";

const AvatarSelection = () => {
  const { displayName: username } = useStore(useUserStore);
  const { avatar, setAvatar } = useStore(useUserStore);

  const [isSelectingAvatar, setIsSelectingAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatar);
  const [availableAvatars, setAvailableAvatars] = useState([]);

  const toggleSelectingAvatar = async () => {
    if (!isSelectingAvatar) {
      const avatars = await fetchAvatars(username);
      setAvailableAvatars(avatars || []);
    }
    setIsSelectingAvatar((prev) => !prev);
  };

  const handleAvatarClick = (avatar: string) => {
    setSelectedAvatar(avatar);
  };
  const saveChanges = () => {
    saveAvatar(username, selectedAvatar);
    setAvatar(selectedAvatar);
    setIsSelectingAvatar(false);
  };

  const cancelChanges = () => {
    setSelectedAvatar(avatar);
    setIsSelectingAvatar(false);
  };

  

  return (
    <>
      <Container
        className="border border-purple-700 rounded-sm p-2 h-fit justify-center items-center gap-3"
        sx={{ width: "50%", display: "flex" }}
      >
        <Typography fontWeight={600}>{username}</Typography>
        <Avatar
          variant="square"
          src={getSelectedAvatarUrl()}
          sx={{ height: "20px", width: "20px" }}
        />
      </Container>

      <Button onClick={toggleSelectingAvatar}>
        {isSelectingAvatar ? "Cancel" : "Choose avatar"}
      </Button>

      {isSelectingAvatar && (
        <Box sx={{ mt: 3, width: "100%" }}>
          <Grid container spacing={2} justifyContent="center">
            {availableAvatars.map((avatar, index) => {
              return (
                <Grid item key={index}>
                  <IconButton onClick={() => handleAvatarClick(avatar)}>
                    <Avatar
                      variant="square"
                      src={`${
                        import.meta.env.VITE_API_BASE_URL
                      }/public/${avatar}.png`}
                      sx={{
                        height: avatar === selectedAvatar ? "50px" : "40px",
                        width: avatar === selectedAvatar ? "50px" : "40px",
                      }}
                    />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Button variant="contained" onClick={saveChanges}>
              Save Changes
            </Button>
            <Button variant="outlined" onClick={cancelChanges}>
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AvatarSelection;
