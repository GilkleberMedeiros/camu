import React from "react";
import { twMerge } from "tailwind-merge";

import { Link } from "@/components/links";
import packageData from "../../package.json";
import BaseProps, { LinkProps } from "@/types/props";


export function Card({ className="", children, ...rest }: BaseProps)
{
  return (
    <div 
      className={twMerge(`
        max-c-s:min-w-[180px] min-w-[240px] w-[18.75rem] bg-main-white border-main-black 
        border-[1px] min-xl:border-[0.0625rem] shrink-0 not-portrait:min-w-[12.5rem] 
        not-portrait:shrink-1
      `, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardsList({ className, children, ...rest }: BaseProps)
{
  const childs = React.Children.toArray(children);
  const firstTwoChilds = childs.slice(0, 2);
  const firstChild = firstTwoChilds[0];
  const secondChild = firstTwoChilds[1];

  return (
    <div 
      className={twMerge(`
        flex flex-nowrap w-[85%] p-[1.25rem] gap-[1rem] overflow-x-auto overflow-y-hidden
      `, className)}
      {...rest}
    >
      {/* will render only three cards (including SeeMoreCard) if cards N >= 3 */}
      {
        childs.length < 3 ? children : 
        [
          React.isValidElement(firstChild) ? 
            React.cloneElement(firstChild, { key: 0 }) : firstChild, 
          React.isValidElement(secondChild) ? 
            React.cloneElement(secondChild, { key: 1 }): secondChild, 
          <SeeMoreCard key={3} href="/localizacoes" target="_self" />
        ]
      }
    </div>
  );
}

export function InfinityCardsList({ className="", children, ...rest }: BaseProps) 
{
  /* Same as CardsList component, but the content inside this go until the limit of the screen. */
  const childs = React.Children.toArray(children);
  const firstTwoChilds = childs.slice(0, 2);
  const firstChild = firstTwoChilds[0];
  const secondChild = firstTwoChilds[1];

  return (
    <CardsList 
      className={"block self-end w-[100%] pr-0"}
    >
      <div
        className={twMerge("flex flex-nowrap gap-[1rem] overflow-x-auto overflow-y-hidden pr-[1.25rem]", className)}
        {...rest}
      >
        {/* will render only three cards (including SeeMoreCard) if cards N >= 3 */}
        {
          childs.length < 3 ? children : 
          [
            React.isValidElement(firstChild) ? 
              React.cloneElement(firstChild, { key: 0 }) : firstChild, 
            React.isValidElement(secondChild) ? 
              React.cloneElement(secondChild, { key: 1 }): secondChild, 
            <SeeMoreCard key={3} href="/localizacoes" target="_self" />
          ]
        }
      </div>
    </CardsList>
  );
}

export function SeeMoreCard({ href, target="_blank", rel="", ...rest }: LinkProps)
{
  return (
    <Link 
      className="
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