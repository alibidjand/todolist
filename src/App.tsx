import Login from "./pages/authentication/login";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import ProtectedLayout from "./components/ProtectedLayout";
import { ProfilePage } from "./pages/Profile";
import { NotesPage } from "./pages/Notes";
import MainAuthenticationWrapper from "./pages/authentication/MainAuthWrapper";
import { Home } from "./pages/Home";
import { useAuth } from "./hook/useAuth";
import { useEffect, useMemo } from "react";

function App() {
  const { user } = useAuth();
  const theRoutes = useMemo(
    () => () => {
      if (
        Object.keys(user).length === 0 ||
        (user.email === "" && user.password === "")
      ) {
        return (
          <>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route element={<AuthLayout />}>
              <Route path="/auth" element={<Navigate to="/auth/login" />} />
              <Route path="/auth/*" element={<MainAuthenticationWrapper />}>
                <Route path="login" element={<Login />} />
              </Route>
            </Route>
          </>
        );
      }
      if (
        Object.keys(user).length !== 0 &&
        user.email !== "" &&
        user.password !== ""
      ) {
        return (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route element={<ProtectedLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notes" element={<NotesPage />} />
            </Route>
          </>
        );
      }
    },
    [user]
  );
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  return <Routes>{theRoutes()}</Routes>;
}

export default App;
