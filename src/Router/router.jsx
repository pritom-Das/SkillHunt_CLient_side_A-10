import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "auth/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
