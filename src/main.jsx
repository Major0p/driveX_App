import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import {App,AppRoutes} from './Common/JSX_Paths'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRoutes}>
          <App />
    </RouterProvider>
  </StrictMode>
);
