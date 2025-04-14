import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Header, Main, Footer } from "./components/main";
import { AdviceUnfinishedAppCard } from "./components/cards";


let elem = document.querySelector(".app");
let root = ReactDOM.createRoot(elem);

root.render(
    <StrictMode>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <AdviceUnfinishedAppCard />
    </StrictMode>
);