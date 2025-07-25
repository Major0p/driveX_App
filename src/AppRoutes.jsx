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
} from "./Common/FilePaths";

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* all the things you want to render in your content area */}
      </Route>
      <Route path="/accountaccess" element={<AccountAccess />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
