import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/home";
import { Locations } from "./pages/locations"


const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, Component: Home },
            { path: "localizacoes", Component: Locations }
        ],
    }
]);

let elem = document.querySelector(".app");
let root = ReactDOM.createRoot(elem);

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);