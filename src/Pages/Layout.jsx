import React from "react";
import { Outlet } from "react-router-dom";
import {Nav,Side} from '../Common/FilePaths'

export default function Layout() {
  return (
    <>
      <div className="relative top-0 left-0">
        <div className="h-[60px] w-full"><Nav/></div>
        <div>
          <div className="w-[250px]"><Side/></div>
          <main>
            main
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
