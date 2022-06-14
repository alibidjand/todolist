import Login from "./pages/authentication/login";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import ForgetPassPage from "./pages/authentication/forget-pass";
import ResetPassPage from "./pages/authentication/reset-pass";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import MainAuthenticationWrapper from "./pages/authentication/MainAuthWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/*" element={<MainAuthenticationWrapper />}>
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassPage />} />
          <Route path="reset-password" element={<ResetPassPage />} />
        </Route>
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
