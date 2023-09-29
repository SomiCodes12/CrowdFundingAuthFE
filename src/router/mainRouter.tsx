import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const Register = loadable(() => import("../pages/auth/Register"));
const HomeScreen = loadable(() => import("../pages/home/HomeScreen"));
const MessagePage = loadable(() => import("../utils/MessagePage"));
const SignIn = loadable(() => import("../pages/auth/Signin"));
const ResetPassword = loadable(() => import("../pages/auth/ResetPassword"));
const ChangePassword = loadable(() => import("../pages/auth/ChangePassword"));
const PrivateRoute = loadable(() => import("./privateRoute"));
const ErrorHandles = loadable(() => import("../utils/ErrorHandles"));

import { ErrorBoundary } from "react-error-boundary";
import MainComponents from "./MainComponents";

const MyErrorShown: any = ({ error }: any) => {
  return <div>reading what this Error is: {error.message}</div>;
};

export const mainRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    // hasErrorBoundary: true,
    // errorElement: <ErrorHandles />,
    element: (
      <ErrorBoundary fallbackRender={MyErrorShown}>
        {/* <PrivateRoute> */}
          <MainComponents />
        {/* </PrivateRoute> */}
      </ErrorBoundary>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/:token/verify-account",
    element: <SignIn />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/:token/reset-account-password",
    element: <ChangePassword />,
  },
]);
