import infos from "@/infos";
import logo from "@/components/composed/logo";
import { ImageIcon } from "@/components/icons";
import { Link } from "@/components/links";



export default function Footer() 
{
  const logoIcon = infos.infos.logo.logoImgPath;
  const socialMedia = infos.infos.socialMedia;

  return (
    <footer 
      className="
        w-full flex justify-between px-[12px] py-[10px] 
        min-xl:px-[0.875rem] min-xl:py-[0.75rem] bg-secondary-white
      "
    >
      <logo.Container>
        <a href="/">
          <logo.Icon src={logoIcon} alt="Logo da empresa." />
        </a>
        <div className="size-[100%] flex flex-col gap-[5px]">
          <span className="font-light text-[0.875rem]">Encontre-nos em </span>
          <div 
            className="
              flex flex-wrap justify-start items-start gap-[7px] min-xl:gap-[0.625rem]
            "
          >
            {socialMedia.map((v, i) => {
              return (
                <a key={i} href={v.link} >
                  <ImageIcon src={v.src} alt={v.alt} className="size-[1.75rem]" />
                </a>
              );
            })}
          </div>
        </div>
      </logo.Container>
      <div className="flex justify-end items-end">
        <span className="space-x-[5px] min-c-s:space-x-[10px] min-sm:space-x-[1.25rem]">
          <span className="font-light text-[0.875rem]">Criado por </span>
          <Link href="https://linktr.ee/gilkleber.dev" className="font-extralight text-[0.875rem]">Gilkleber Medeiros</Link>
        </span>
      </div>
    </footer>
  );
}