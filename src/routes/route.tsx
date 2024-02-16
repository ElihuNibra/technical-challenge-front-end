import Login from "@/components/pages/login.page";
import Main from "@/components/pages/main.page";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,
  },{
    path: "/login",
    element: <Login />,
  },
]);
