import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Nav, Side,ThemeContext } from '../Common/FilePaths'
import {THEME_LIGHT} from '../Common/Constants'

export default function Layout() {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className={`min-w-screen min-h-screen grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] ${(theme == THEME_LIGHT) ? 'light' : 'dark'}`}>
        <nav className="col-span-2"><Nav /></nav>
        <aside><Side /></aside>
        <main className={`${(theme == THEME_LIGHT) ? 'light-main' : 'dark-main'} rounded-l-3xl`}><Outlet /></main>
      </div>
    </>
  );
}

