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

export function CardsList({ id="", style, children })
{
  const childs = Array.from(children);

  return (
    <div 
      id={id} 
      className={twMerge(`
        flex flex-nowrap w-[85%] p-[1.25rem] gap-[1rem] overflow-x-auto overflow-y-hidden
      `, style)}
    >
      {/* will render only three cards (including SeeMoreCard) if cards N >= 3 */}
      {childs.length < 3 ? children : [...(childs.slice(0, 2)), <SeeMoreCard href="" />]}
    </div>
  );
}

export function PhysicalAdressCard({ adressInfo })
{
  return (
    <Card style="flex flex-col px-[1.25rem] py-[0.875rem] gap-[0.875rem]">
      <h4 className="font-semibold text-[1rem]">
        {adressInfo.name}
      </h4>
      <div className="flex flex-col gap-[5px] items-start mb-[1.375rem]">
        <span className="text-[0.75rem]">
          <span className="font-semibold">Estado </span>{adressInfo.state}
        </span>
        <span className="text-[0.75rem]">
          <span className="font-semibold">Cidade </span>{adressInfo.city}
        </span>
        <span className="text-[0.75rem]">
          <span className="font-semibold">Bairro </span>{adressInfo.bairro}
        </span>
        <span className="text-[0.75rem]">{adressInfo.street}, {adressInfo.number}</span>
        <span className="text-[0.75rem]">
          {adressInfo.cep}
        </span>
      </div>
      <Link 
        href={adressInfo.viewOnMapsUrl}
        rel="noopener noreferrer"
      >
        Ver no google maps
      </Link>
    </Card>
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