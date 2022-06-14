import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { AppBar } from "./AppBar";

export const AuthLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      {/* <AppBar
        pages={[
          { label: "Forget Password", path: "/forget-password" },
          { label: "Reset Password", path: "/reset-password" },
          { label: "Login", path: "/login" },
        ]}
      /> */}
      {outlet}
    </div>
  );
};
