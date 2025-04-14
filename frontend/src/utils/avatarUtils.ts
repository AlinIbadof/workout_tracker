import { useUserStore } from "@/store/UserStore";

export const fetchAvatars = async (username: string) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/avatars?username=${encodeURIComponent(username)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    return data?.availableAvatars;
  } catch (error) {
    console.error("Error during fetching all available avatars:", error);
  }
};

export const saveAvatar = async (username: string, avatar: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/avatars`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          avatarName: avatar,
        }),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Save avatar failed");
    }
  } catch (error) {
    console.error("Error during saving avatar:", error);
  }
};

export const getSelectedAvatarUrl = () => {
  const avatar = useUserStore.getState().avatar;
  return `${import.meta.env.VITE_API_BASE_URL}/public/${avatar}.png`;
};
