export function ImageIcon({ id="", src, alt, style, children, ...rest })
{
  /* Generic and customizable icon */
  return (
    <img id={id ? `${id}ImageIcon` : ""} src={src} alt={alt} className={style} {...rest} />
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

export function SocialMediaIconBtn({ id=Symbol().toString(), iconSrc, iconAlt, iconSize="1.5"})
{
  let style = "w-[" + iconSize.toString() + "rem]" + " h-[" + iconSize.toString() + "rem]"

  return <IconBtn 
    id={id} 
    iconSrc={iconSrc} 
    iconAlt={iconAlt} 
    iconStyle={style} 
    btnStyle="m-0 p-0 b-0"
  />
}

export function Logo()
{
  return (
    <div id="logo" className="flex items-center gap-[10px] grow-0 font-medium">
      <img id="logoImg" className="w-[60px] h-[60px] max-c-s:w-[50px] max-c-s:h-[50px]" 
        src="./src/assets/tmp-logo.svg" alt="logo"/>
      <h1 id="logoTitle" className="text-[34px] max-c-s:text-[30px]">Camu</h1>
    </div>
  );
}