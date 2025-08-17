import React, { useContext, useEffect, useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import { Nav, Side,ThemeContext,AuthContext,DriveXLoading } from '../Common/FilePaths'
import {THEME_LIGHT} from '../Common/Constants'
import {IsLogedIn} from '../API/CommonRequests'

export default function Layout() {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const [valid,setValid] = useState(false);

  useEffect(() => {
    (async ()=> {
      let res = await IsLogedIn();
      (res)?setValid(true):navigate('/accountaccess');
    })();
  }, []);

  return (
    <>
    {
      (!valid)?<DriveXLoading/>:
      <div className={`min-w-screen min-h-screen grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] ${(theme == THEME_LIGHT) ? 'light' : 'dark'}`}>
        <nav className="col-span-2"><Nav /></nav>
        <aside><Side /></aside>
        <main className={`${(theme == THEME_LIGHT) ? 'light-main' : 'dark-main'} rounded-l-3xl`}><Outlet /></main>
      </div>
    }
    </>
  );
}

