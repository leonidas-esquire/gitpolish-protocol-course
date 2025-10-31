import React, { createContext, useContext, useState } from "react";

interface User {
  id: string;
  role: "student" | "admin";
  name: string;
}

interface AuthContextProps {
  user: User | null;
  loginAsStudent: () => void;
  loginAsAdmin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginAsStudent: () => {},
  loginAsAdmin: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const loginAsStudent = () =>
    setUser({ id: "student", role: "student", name: "Student User" });
  const loginAsAdmin = () =>
    setUser({ id: "admin", role: "admin", name: "Admin User" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginAsStudent, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
