import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import components from "./components/components";


const reactComponentPreffix = "[react-comp]";

for (let elem of document.querySelectorAll(`[class^='${reactComponentPreffix}']`))
{
    // setting data
    let elemClassListArr = Array.from(elem.classList);
    let elemComponentsName = elemClassListArr.filter((item) => {
         return item.startsWith(reactComponentPreffix);
    });

    let root = ReactDOM.createRoot(elem);
    let toRenderComponents = [];

    // getting components from `components` mapping
    for (let componentName of elemComponentsName)
    {
        let componentCName = componentName.replace(reactComponentPreffix, "");
        let Component = components[componentCName];

        if (!Component)
        {
            console.warn(`component ${componentCName} couldn't be found.`);
        }

        toRenderComponents.push(<Component key={Symbol().toString()} />)
    }
    if (toRenderComponents.length >= 1)
    {
        root.render(
            <StrictMode>
                {toRenderComponents}
            </StrictMode>
        );
    }
}