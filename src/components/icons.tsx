import { twMerge } from "tailwind-merge";

import { ImageProps, SvgProps } from "@/types/props";


export function ImageIcon({ src, alt, className, children, ...rest }: ImageProps)
{
  /* Generic and customizable icon */
  return (
    <img src={src} alt={alt} className={className} {...rest} />
  );
}

export function IconShare3({ className, children, ...rest }: SvgProps)
{
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={24} 
      height={24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#09090B" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={twMerge("icon icon-tabler icons-tabler-outline icon-tabler-share-3", className)}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
    </svg>
  );
}

export function ChevronLeftIcon({ className, children, ...rest }: SvgProps)
{
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#09090B" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={twMerge("lucide lucide-chevron-left", className)}
      {...rest}
    >
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}

export function ChevronRightIcon({ className, children, ...rest }: SvgProps)
{
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#09090B" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={twMerge("lucide lucide-chevron-right", className)}
      {...rest}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

