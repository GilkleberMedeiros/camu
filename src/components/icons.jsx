import { twMerge } from "tailwind-merge";


export function ImageIcon({ id="", src, alt, style, children, ...rest })
{
  /* Generic and customizable icon */
  return (
    <img id={id ? `${id}ImageIcon` : ""} src={src} alt={alt} className={style} {...rest} />
  );
}

export function IconShare3({ style, children, ...rest })
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
      className={twMerge("icon icon-tabler icons-tabler-outline icon-tabler-share-3", style)}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
    </svg>
  );
}

export function IconBtn({ id=Symbol().toString(), iconSrc, iconAlt, iconStyle, btnStyle, onClick=null })
{
  return (
    <button id={`${id}IconBtn`} className={btnStyle} onClick={onClick}>
      <img src={iconSrc} className={iconStyle}
        alt={iconAlt}/>
    </button>
  );
}
