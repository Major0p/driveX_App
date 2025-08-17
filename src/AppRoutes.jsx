import {Route,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import {Layout,AccountAccess,NotFound,SignIn,SignUp,Home} from "./Common/FilePaths";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* all the things you want to render in your content area */}
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/accountaccess" element={<AccountAccess />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
export default AppRoutes;