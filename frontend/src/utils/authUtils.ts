import { useUserStore } from "@/store/UserStore";

type Credentials = {
  email?: string;
  username: string;
  password: string;
};

export const handleLogin = async (credentials: Credentials) => {
  const { username, password } = credentials;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();

    if (data) {
      console.log("data", data);
      if (data.token) {
        sessionStorage.removeItem("token");
        const token = data.token;
        sessionStorage.setItem("token", token);
        useUserStore.getState().setIsLoggedIn(true);
        useUserStore.getState().setDisplayName(data.displayName);

        return data;
      } else {
        return data;
      }
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const handleRegister = async (credentials: Credentials) => {
  const { email, username, password } = credentials;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Register failed");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const verifyToken = async (token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/verifyToken`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
