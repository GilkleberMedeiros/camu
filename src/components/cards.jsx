import { Link } from "./links.jsx";


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
    <div className="w-[18.75rem] min-w-auto flex flex-col px-[1.25rem] py-[0.875rem] gap-[0.875rem] 
      border-main-black border-[1px]">
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
    </div>
  );
}