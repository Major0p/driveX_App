import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userId, setUserId] = useState("UserId");
  const [userFirstName, setUserFirstName] = useState("UserName");

  return (
    <AuthContext.Provider
      value={{ userId, setUserId, userFirstName, setUserFirstName }}
    >
      {children}
    </AuthContext.Provider>
  );
}
