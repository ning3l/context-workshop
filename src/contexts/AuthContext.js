import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isToken, setIsToken] = useState(false);

  return (
    <AuthContext.Provider value={{ isToken, setIsToken }}>
      {children}
    </AuthContext.Provider>
  );
}
