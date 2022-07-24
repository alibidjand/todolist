import { useEffect } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
// import { PermanentDrawerLeft } from "./AppBar";

export const AuthLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  if (
    Object.keys(user).length !== 0 &&
    user.email !== "" &&
    user.password !== ""
  ) {
    return <Navigate to="/home" replace />;
  }
  // useEffect(() => {
  // }, [user]);

  return (
    <div>
      {/* <PermanentDrawerLeft
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
