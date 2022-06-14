import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { AppBar } from "./AppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Profile", path: "profile" },
          { label: "Settings", path: "settings" },
        ]}
      />
      {outlet}
    </div>
  );
};
