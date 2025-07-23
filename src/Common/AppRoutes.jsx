import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountAccess from "../Pages/Auth/AccountAccess";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountAccess />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
