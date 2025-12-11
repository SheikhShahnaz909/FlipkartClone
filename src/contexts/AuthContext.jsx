import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user_v1")); }
    catch { return null; }
  });

  useEffect(() => {
    localStorage.setItem("user_v1", JSON.stringify(user));
  }, [user]);

  function register({ name, email, password }) {
    const usersRaw = localStorage.getItem("users_v1");
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    if (users.find(u => u.email === email)) throw new Error("Email already exists");
    const newUser = { id: Date.now().toString(), name, email, password };
    users.push(newUser);
    localStorage.setItem("users_v1", JSON.stringify(users));
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email });
  }

  function login({ email, password }) {
    const usersRaw = localStorage.getItem("users_v1");
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) throw new Error("Invalid credentials");
    setUser({ id: found.id, name: found.name, email: found.email });
  }

  function logout() { setUser(null); }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
