import React, { createContext, useContext, useState } from "react";
import { THEME_DARK, THEME_LIGHT } from "../Common/Constants";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(THEME_LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
