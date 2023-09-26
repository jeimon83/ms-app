import React from "react";
import { useAuth } from "../../contexts/AuthContext";

function LogOut() {
  const { logout } = useAuth();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
}

export default LogOut;