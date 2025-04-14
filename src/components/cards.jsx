import { twMerge } from "tailwind-merge";

import { Link } from "./links.jsx";
import packageData from "../../package.json"


export function Card({ style="", children, ...rest })
{
  return (
    <div 
      className={twMerge(`
        max-c-s:min-w-[180px] min-w-[240px] w-[18.75rem] bg-main-white border-main-black 
        border-[1px] min-xl:border-[0.0625rem] shrink-0 not-portrait:min-w-[12.5rem] 
        not-portrait:shrink-1
      `, style)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardsList({ id="", style, children, ...rest })
{
  const childs = Array.from(children);

  return (
    <div 
      id={id} 
      className={twMerge(`
        flex flex-nowrap w-[85%] p-[1.25rem] gap-[1rem] overflow-x-auto overflow-y-hidden
      `, style)}
      {...rest}
    >
      {/* will render only three cards (including SeeMoreCard) if cards N >= 3 */}
      {childs.length < 3 ? children : [...(childs.slice(0, 2)), <SeeMoreCard href="/localizacoes" target="_self" />]}
    </div>
  );
}

export function InfinityCardsList({ style="", children, ...rest }) 
{
  /* Same as CardsList component, but the content inside this go until the limit of the screen. */
  const childs = Array.from(children);

  return (
    <CardsList 
      style={"block self-end w-[100%] pr-0"}
    >
      <div
        className={twMerge("flex flex-nowrap gap-[1rem] overflow-x-auto overflow-y-hidden pr-[1.25rem]", style)}
        {...rest}
      >
        {/* will render only three cards (including SeeMoreCard) if cards N >= 3 */}
        {childs.length < 3 ? children : [...(childs.slice(0, 2)), <SeeMoreCard href="/localizacoes" target="_self" />]}
      </div>
    </CardsList>
  );
}

export function SeeMoreCard({ href, target="_blank", rel="", ...rest })
{
  return (
    <Link 
      style="
        max-c-s:min-w-[180px] min-w-[240px] w-[18.75rem] not-portrait:min-w-[12.5rem] 
        not-portrait:shrink-1 bg-main-white border-main-black shrink-0
        border-[1px] min-xl:border-[0.0625rem] hover:border-secondary-white active:border-secondary-white
        flex items-center justify-center duration-250 ease-in-out cursor-pointer
      "
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      Ver mais...
    </Link>
  );
}

export function AdviceUnfinishedAppCard()
{
  const screenDebug = false;
  const root = document.getElementsByTagName("html")[0];
  const width = root.clientWidth;
  const height = root.clientHeight;

  return (
    <div 
      className="
        fixed bottom-3.5 left-10 h-fit w-fit text-[0.75rem] text-wrap text-white p-2 bg-secondary-black 
        border-4 border-secondary-white rounded-xl
      "
    >
      <p>
        This project is unfinished. Currently on version {packageData.version}. 
        {
          screenDebug && `Screen: ${window.screen.width}x${window.screen.height}, 
          Window: ${window.innerWidth}x${window.innerHeight}, Root: ${width}x${height}.`
        }
      </p>
    </div>
  );
}