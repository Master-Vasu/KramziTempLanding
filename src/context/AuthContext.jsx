import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const login = useCallback((email, password) => {
    if (!email || !password) return false;
    setUser({
      email,
      name: email.split("@")[0],
    });
    setIsLoginOpen(false);
    return true;
  }, []);

  const signup = useCallback((name, email, password) => {
    if (!name || !email || !password) return false;
    setUser({ email, name });
    setIsLoginOpen(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const openLogin = useCallback((mode = "login") => {
    setAuthMode(mode);
    setIsLoginOpen(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isLoginOpen,
        setIsLoginOpen,
        authMode,
        setAuthMode,
        openLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
