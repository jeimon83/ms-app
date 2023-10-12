import React, { useState, createContext, useContext } from "react";
import axios from "../axios-config";
import baseUrl from "../api_routes/base_url";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  const login = (user) => {
    axios.post(baseUrl() + "/session", user).then((response) => {
      if (response.status === 200) {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/welcome");
      } else {
        navigate("/login");
      }
    }).catch((error) => {
      console.error("An error occured: ", error);
    })
  }

  const signup = (user) => {
    axios.post(baseUrl() + "/registration", user).then((response) => {
      if (response.status === 201) {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/welcome");
      } else {
        navigate("/login");
      }
    }).catch((error) => {
      console.error("Error signing up: ", error);
    })
  }

  return (
    <AuthContext.Provider value={{ user, logout, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
}



