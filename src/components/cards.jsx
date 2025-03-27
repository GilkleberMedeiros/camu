import { twMerge } from "tailwind-merge";

import { Link } from "./links.jsx";
import packageData from "../../package.json"


export function Card({ style="", children, ...rest })
{
  return (
    <div 
      className={twMerge(`
        w-[18.75rem] min-w-auto bg-main-white border-main-black border-[1px] min-xl:border-[0.0625rem]
      `, style)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardsList({ id="", containerStyles, children })
{
  return (
    <div id={id} className={containerStyles || "flex w-[85%] p-[1.25rem] gap-[1rem]"}>
      {children}
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