import { handleLogin } from "@/utils/authUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col w-1/2">
      <input
        className="ms-4"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="ms-4"
        type="password"
        placeholder="****"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          handleLogin({ username, password }, navigate);
        }}
      >
        Log in
      </button>
    </div>
  );
}
