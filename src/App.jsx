import { RouterProvider } from "react-router-dom";
import {
  AuthContextProvider,
  AppRoutes,
  ThemeContextProvider,
} from "./Common/FilePaths";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={AppRoutes}>
            {/* for now router is handling what will appear hear */}
          </RouterProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
