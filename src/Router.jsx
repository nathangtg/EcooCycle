import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GuestLayout from "./Layouts/GuestLayout";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Sign_up";
import DefaultLayout from "./Layouts/DefaultLayout";

const router = createBrowserRouter([
  //! DEFAULT LAYOUT
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/Homepage",
        element: <Homepage />,
      },
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },

  //! GUEST LAYOUT
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
