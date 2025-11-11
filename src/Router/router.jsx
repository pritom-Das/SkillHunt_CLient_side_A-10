import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Login from "../Components/Login";
import CreateaJOb from "../Components/CreateaJOb";
import AllJobs from "../Components/AllJobs";
import JobDetails from "../Components/JobDetails";
import MyaddedJobs from "../Components/MyaddedJobs";
import MyaccpetedJobs from "../Components/MyaccpetedJobs";

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
        path: "createjob",
        Component: CreateaJOb,
      },
      {
        path: "alljobs",
        Component: AllJobs,
      },
      {
        path: "jobdetails/:id",
        Component: JobDetails,
      },
      {
        path: "addedjobs",
        Component: MyaddedJobs,
      },
      {
        path: "/myaccpetedjobs",
        Component: MyaccpetedJobs,
      },
      {
        path: "auth/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
