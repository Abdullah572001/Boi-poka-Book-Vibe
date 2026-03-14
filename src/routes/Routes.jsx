import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../pages/Bookdetails/BookDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        index : true,
        path : '/',
        loader : () => fetch('/booksData.json'),
        HydrateFallback: () => <div>Loading...</div>,
        Component: Home
      },
      {
        path : '/listedBooks',
        loader : () => fetch('/booksData.json'),
        HydrateFallback: () => <div>Loading...</div>,
        Component: ListedBooks,
      },
      {
        path : '/bookDetails/:id',
        loader : () => fetch('/booksData.json'),
        HydrateFallback: () => <div>Loading...</div>,
        Component: BookDetails,
      }
    ]
  },
]);
