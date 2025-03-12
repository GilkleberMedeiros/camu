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
