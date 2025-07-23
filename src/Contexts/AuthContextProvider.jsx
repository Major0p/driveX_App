import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [userId,setUserId] = useState('');
    const [userFirstName,setUserFirstName] = useState('');
    
  return <AuthContext.Provider value={{userId,setUserId,userFirstName,setUserFirstName}}>{children}</AuthContext.Provider>;
}
