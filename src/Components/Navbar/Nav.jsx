import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext,UserIconBtn} from "../../Common/FilePaths";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { THEME_DARK, THEME_LIGHT } from "../../Common/Constants";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full flex justify-between items-center ${(theme == THEME_LIGHT) ? 'light' : 'dark'}`}>
      <div className="drivex ml-5">
        <Link to="/" className="text-3xl">
          DriveX
        </Link>
      </div>
      <div className="mr-5">
        <ul className="flex flex-row-reverse items-center gap-5">
          <li>
            <UserIconBtn/>
          </li>
          <li>
            <span className="hidden"
              onClick={() => {
                theme == THEME_DARK
                  ? setTheme(THEME_LIGHT)
                  : setTheme(THEME_DARK);
              }}
            >
              {theme == THEME_DARK ? (
                <MdLightMode size={30} color="whitesmoke" />
              ) : (
                <MdDarkMode size={30} color="#4d4949" />
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
