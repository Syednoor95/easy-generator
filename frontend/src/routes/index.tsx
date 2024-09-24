import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PathConstants from "./pathConstants";

const Layout = React.lazy(() => import("../components/Layout"));
const SignUpForm = React.lazy(() => import("../components/SignUp"));
const LoginForm = React.lazy(() => import("../components/Login"));
const LandingForm = React.lazy(() => import("../components/LandingPage"));

const {HOME, LOGIN, SIGN_UP, LANDING_PAGE} = PathConstants

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Layout />} />
      <Route path={LOGIN} element={<LoginForm />} />
      <Route path={SIGN_UP} element={<SignUpForm />} />
      <Route path={LANDING_PAGE} element={<LandingForm />} />

      {/* <Route path="*" element={<Page404 />} /> */}
    </>
  )
);
export default router;
