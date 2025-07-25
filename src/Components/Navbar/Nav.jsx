import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { ThemeContext } from "../../Common/FilePaths";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { THEME_DARK, THEME_LIGHT } from "../../Common/Constants";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={`h-full w-full flex justify-between items-center ${(theme==THEME_LIGHT)?'bg-gray-100':'dark-bg'}`}>
      <div className="drivex ml-5">
        <Link to="/" className="text-3xl">
          DriveX
        </Link>
      </div>
      <div className="mr-5">
        <ul className="flex flex-row-reverse items-center gap-5">
          <li>
            <FaUserCircle size={30} color="rgba(7, 33, 172, 0.66)" />
          </li>
          <li>
            <span
              onClick={() => {
                theme == THEME_DARK
                  ? setTheme(THEME_LIGHT)
                  : setTheme(THEME_DARK);
              }}
            >
              {theme == THEME_DARK ? (
                <MdLightMode size={30} color="rgba(7, 33, 172, 0.66)"/>
              ) : (
                <MdDarkMode size={30} color="#4d4949"/>
              )}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
