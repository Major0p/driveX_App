import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Layout,
  AccountAccess,
  NotFound,
  SignIn,
  SignUp,
} from "./Common/JSX_Paths";

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="accountaccess" element={<AccountAccess />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
