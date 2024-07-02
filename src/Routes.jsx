import React from "react";
import ErrorPage from "./Components/ErrorPage";
import App from "./App";
import SearchPage from "./Components/SearchPage";
import Info from "./Components/Info";

const Routes = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/search/:query",
    element: <SearchPage></SearchPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/:type/:id",
    element: <Info></Info>,
    errorElement: <ErrorPage></ErrorPage>,
  },
];

export default Routes;
