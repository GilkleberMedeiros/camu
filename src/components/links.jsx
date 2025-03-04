export function Link({ href, target="_blank", rel="", style="", children, ...rest })
{
    return (
        <a 
        className={
        "w-fit text-[0.75rem] underline decoration-dotted decoration-main-black "+
        "underline-offset-[25%] decoration-[10%] hover:bg-secondary-black hover:text-main-white "+
        "hover:decoration-main-white " + style
        }
        href={href}
        target={target}
        rel={rel}
        {...rest}
        >
            {children}
        </a>
    );
}