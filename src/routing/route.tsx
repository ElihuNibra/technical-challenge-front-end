import Login from "@/components/pages/login";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);
