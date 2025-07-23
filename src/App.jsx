import { AuthContextProvider } from "./Contexts/AuthContextProvider";
import AccountAccess from "./Pages/Auth/AccountAccess";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './Common/AppRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <AuthContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
