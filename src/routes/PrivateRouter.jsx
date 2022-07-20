import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/theme";

const Home = lazy(() => import("../pages/Home"));
const CreateUser = lazy(() => import("../pages/CreateUser"));

const PrivateRouter = () => {
  const isDarkTheme = localStorage.getItem("theme");

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <ThemeProvider theme={isDarkTheme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-user" element={<CreateUser />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default PrivateRouter;
