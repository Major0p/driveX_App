import React from "react";
import { Outlet } from "react-router-dom";
import {Nav} from '../Common/FilePaths'

export default function Layout() {
  return (
    <>
      <div className="">
        <div className="h-[60px] w-full"><Nav/></div>
        <div>
          <div>sidebar</div>
          <main>
            main
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
