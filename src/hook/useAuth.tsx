import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/redux/hooks/hooks";
import { clearUser, getUser, setUser } from "../state/redux/slice/authSlice";
// import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext<{
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}>({
  user: {},
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  // const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data: any) => {
    dispatch(setUser(data));
    navigate("/home", { replace: true });
  };

  const logout = () => {
    dispatch(clearUser());
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
