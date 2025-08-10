import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userId, setUserId] = useState("shubham12");
  const [userFirstName, setUserFirstName] = useState("UserName");

  return (
    <AuthContext.Provider value={{ userId, setUserId, userFirstName, setUserFirstName }}>
      {children}
    </AuthContext.Provider>
  );
}
