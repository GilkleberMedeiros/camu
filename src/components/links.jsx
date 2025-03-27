import { twMerge } from "tailwind-merge";


export function Link({ href, target="_blank", rel="", style="", children, ...rest })
{
    return (
        <a 
        className={
            twMerge(`
                w-fit text-[0.75rem] underline decoration-dotted decoration-main-black
                underline-offset-[25%] decoration-[10%] hover:bg-secondary-black hover:text-main-white
                hover:decoration-main-white active:bg-secondary-black active:text-main-white 
                active:decoration-main-white 
            `, style)
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

export function MenuLink({ href, target="_self", rel="", style="", children, ...rest })
{
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={
                twMerge(
                `
                    relative opacity-100 hover:opacity-75
                    transition-opacity duration-300 ease-in-out
                    before:content-[''] before:absolute before:bottom-0 before:left-0
                    before:w-0 before:h-[1px] before:border-dotted before:border-b-[2px] 
                    before:border-main-black before:transition-all before:duration-700 
                    before:ease-in-out hover:before:w-full hover:before:opacity-90
                `, style
                )
            }
            {...rest}
        >
            {children}
        </a>
    );
}