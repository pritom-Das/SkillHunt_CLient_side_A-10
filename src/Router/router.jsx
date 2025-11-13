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
import Privateroute from "../Privateroute.jsx/Privateroute";
import Register from "../Components/Register";

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
        element: (
          <Privateroute>
            {" "}
            <CreateaJOb />
          </Privateroute>
        ),
      },
      {
        path: "alljobs",
        Component: AllJobs,
      },
      {
        path: "jobdetails/:id",
        element: (
          <Privateroute>
            <JobDetails />
          </Privateroute>
        ),
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
      {
        path: "auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
