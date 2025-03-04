export function Link({ text, href, target="_blank", rel="", style="", ...rest })
{
    return (
        <a 
        className={
        style || 
        "w-fit text-[0.75rem] underline decoration-dotted decoration-main-black "+
        "underline-offset-[25%] decoration-[10%] hover:bg-secondary-black hover:text-main-white "+
        "hover:decoration-main-white"
        }
        href={href}
        target={target}
        rel={rel}
        {...rest}
        >
            {text}
        </a>
    );
}