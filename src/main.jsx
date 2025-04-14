import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
]);

let elem = document.querySelector(".app");
let root = ReactDOM.createRoot(elem);

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);