import infos from "@/infos";
import logo from "@/components/composed/logo";
import { MenuAndMediaShare } from "@/components/menus";

export default function Header()
{
  const logoTitle = infos.infos.logo.logoTitle;
  const logoIcon = infos.infos.logo.logoImgPath;

  return (
    <header 
      className="
        p-[1.125rem] flex justify-between content-center border-b-2 
        border-b-main-black shadow-main-black/25 shadow-[0_4px_2px_0] 
        min-xl:border-b-[0.125rem] min-xl:shadow-[0_0.25rem_0.125rem_0]
      "
    >
      <logo.Container>
        <a href="/">
          <logo.Icon src={logoIcon} alt="logo da empresa." />
        </a>
        <logo.Title title={logoTitle} />
      </logo.Container>
      <MenuAndMediaShare />
    </header>
  );
}