import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddToy from "../Pages/AddToy";
import AllToys from "../Pages/AllToys";
import MyToy from "../Pages/MyToy";
import Blogs from "../Pages/Blogs";
import ToyCard from "../Home/ToyCard";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
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
        path: "toy/:id",
        element: <ToyCard></ToyCard>,
      },
      {
        path: "/myToys",
        element: <MyToy></MyToy>,
      },
      {
        path: ":id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
