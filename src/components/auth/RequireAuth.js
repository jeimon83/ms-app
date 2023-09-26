import { useAuth } from "../../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}