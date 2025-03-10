export function Icon({ id="", src, alt, style, children, ...rest })
{
  return (
    <img id={id ? `${id}Icon` : ""} src={src} alt={alt} className={style} {...rest} />
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
      <img id="logoImg" className="w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px]" 
        src="./src/assets/tmp-logo.svg" alt="logo"/>
      <h1 id="logoTitle" className="text-[30px] max-md:text-[25px] max-sm:text-[18px]">Camu</h1>
    </div>
  );
}