/* These components follow composition pattern */
import { twMerge } from "tailwind-merge";

import { ImageIcon } from "./icons";


export default {
    "Container": Container,
    "Icon": Icon,
    "Title": Title
}

export function Container({ style, children, ...rest })
{
  return (
    <div 
      id="logo" 
      className={twMerge("flex items-center gap-[10px] min-xl:gap-[0.625rem] grow-0 font-medium", style)} 
      {...rest}
    >
      { children }
    </div>
  );
}

export function Icon({ src, style, children, ...rest })
{
  return (
    <ImageIcon 
      id="logo" 
      style={twMerge("w-[60px] h-[60px] max-c-s:w-[50px] max-c-s:h-[50px] min-xl:size-[3.125rem]", style)}
      src={src} alt="logo da empresa." 
      {...rest}
    />
  );
}

export function Title({ title, style, children, ...rest })
{
  return (
    <h1 
      id="logoTitle" 
      className={twMerge("text-[34px] max-c-s:text-[30px] min-xl:text-[2.125rem]", style)} 
      {...rest}
    >
      {title}
    </h1>
  );
}