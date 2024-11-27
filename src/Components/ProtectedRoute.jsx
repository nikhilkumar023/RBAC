import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userRole } = useSelector((state) => state.auth);

  return allowedRoles.includes(userRole) ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
