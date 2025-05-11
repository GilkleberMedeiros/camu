/* These components follow composition pattern */
import { twMerge } from "tailwind-merge";

import { ImageIcon } from "@/components/icons";
import BaseProps, { ImageProps } from "@/types/props";


export default {
    "Container": Container,
    "Icon": Icon,
    "Title": Title
}

export function Container({ className, children, ...rest }: BaseProps)
{
  return (
    <div 
      id="logo" 
      className={twMerge("flex items-center gap-[10px] min-xl:gap-[0.625rem] grow-0 font-medium", className)} 
      {...rest}
    >
      { children }
    </div>
  );
}

export function Icon({ src, alt="logo da empresa.", className, children, ...rest }: ImageProps)
{
  return (
    <ImageIcon 
      id="logo" 
      className={twMerge("w-[60px] h-[60px] max-c-s:w-[50px] max-c-s:h-[50px] min-xl:size-[3.125rem]", className)}
      src={src} alt={alt} 
      {...rest}
    />
  );
}

export function Title({ title, className, children, ...rest }: BaseProps & { title: string })
{
  return (
    <h1 
      id="logoTitle" 
      className={twMerge("text-[34px] max-c-s:text-[30px] min-xl:text-[2.125rem]", className)} 
      {...rest}
    >
      {title}
    </h1>
  );
}