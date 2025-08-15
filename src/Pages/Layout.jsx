import React, { useContext, useEffect, useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import { Nav, Side,ThemeContext,AuthContext,DriveXLoading } from '../Common/FilePaths'
import {THEME_LIGHT} from '../Common/Constants'
import { GetSessionTokenFromLocalStorage, RefreshToken } from "../Common/Utils";
import {API_URLS} from '../API/URLs'

export default function Layout() {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const [valid,setValid] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let url = API_URLS.ISLOGEDIN;
        const sessionToken = GetSessionTokenFromLocalStorage();
        let objReq = {
          method:"GET",
          headers:{
            'Authorization': `Bearer ${sessionToken}`
          }
        };
        let res = await fetch(url,objReq);

        if (res.ok)
          res = await res.json();

        (res.data == 1) ? setValid(true) : navigate('/accountaccess');
      }
      catch (ex) {
        console.log(ex);
      }
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

