import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Profile from "./Components/Profile.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Signup from "./Components/Signup.jsx";
import AuthContext from "./Components/AuthContext.jsx";
import Signin from "./Components/Signin.jsx";
import Order from "./Components/Order.jsx";
import Private from "./Components/Private.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: '/orders',
        element: <Private><Order></Order></Private>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>
);
