import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Register from "../Register/Register";
import AddToy from "../Pages/AddToy";
import AllToys from "../Pages/AllToys";
import MyToy from "../Pages/MyToy";
import Blogs from "../Pages/Blogs";
import ToyCard from "../Home/ToyCard";
import Update from "../Pages/Update";
import ToyDetails from "../Home/ToyDetails";
import Error from "../Error/Error";
import Login from "../Login/Login";
import PrivateRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signIn",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToy",

        element: <AddToy></AddToy>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },

      {
        path: "/myToys",
        element: <MyToy></MyToy>,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://server-zoo-zone-toys.vercel.app/toy/${params.id}`),
      },

      {
        path: "allToys/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://server-zoo-zone-toys.vercel.app/toy/${params.id}`),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://server-zoo-zone-toys.vercel.app/toy/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
