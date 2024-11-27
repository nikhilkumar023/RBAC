import { useSelector } from "react-redux";

const usePermission = (permission) => {
  const permissions = useSelector((state) => state.auth.permissions);
  return permissions.includes(permission);
};

export default usePermission;

