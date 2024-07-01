import React from "react";
import ErrorPage from "./Components/ErrorPage";
import "./App";
import App from "./App";

const Routes = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  // {
  //   path: "/movies",
  //   element: <Movie></Movie>,
  //   errorElement: <ErrorPage></ErrorPage>,
  // },
  // {
  //   path: "/tv",
  //   element: <Tv></Tv>,
  //   errorElement: <ErrorPage></ErrorPage>,
  // },
  // {
  //   path: "/:id",
  //   element: <Info></Info>,
  //   errorElement: <Error  Page></ErrorPage>,
  // },
];

export default Routes;
