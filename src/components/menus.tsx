"use client";

import React from "react";

import { ImageIcon, IconShare3 } from "@/components/icons";
import { MenuLink } from "@/components/links";
import infos from "@/infos";
import { SocialMediaShareLink } from "@/types/infos";


export function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Burger Menu Button */}
      <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`hidden max-sm:flex flex-col justify-center items-center
          w-[38px] h-[38px] border-2 border-main-black
          rounded-[10px] relative z-50
          ${isOpen ? "border-main-black/0" : ""}`}
      >
          <span className={`
              w-[24px] h-[2px] bg-main-black
              transition-all duration-300 ease-in-out
              ${isOpen ? 'absolute top-[50%] rotate-45' : ''}
          `}></span>
          <span className={`
              w-[24px] h-[2px] bg-main-black my-[6px]
              transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-0' : ''}
          `}></span>
          <span className={`
              w-[24px] h-[2px] bg-main-black
              transition-all duration-300 ease-in-out
              ${isOpen ? 'position absolute top-[50%] -rotate-45' : ''}
          `}></span>
      </button>

      {/* Desktop Menu */}
      <nav className="
        max-sm:hidden flex flex-wrap content-center px-[20px] min-xl:px-[1.25rem] 
        py-[12px] min-xl:py-[0.75rem] gap-[16px] min-xl:gap-[1rem] font-medium
      "
      >
        <MenuLink href="#sectionSobre" className="text-[0.75rem]">Sobre</MenuLink>
        <MenuLink href="#sectionLocalizacao" className="text-[0.75rem]">Localização</MenuLink>
        <MenuLink href="#sectionHorarioDeFuncionamento" className="text-[0.75rem]">Horário de funcionamento</MenuLink>
        <MenuLink href="#sectionEntreEmContato" className="text-[0.75rem]">Entre em contato</MenuLink>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`
          fixed top-0 right-0 h-screen w-1/2
          bg-main-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          max-sm:flex flex-col items-center px-[20px] py-[25px]
          border-l-1 border-main-black
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          hidden z-40
      `}>
          <div className="w-full h-full flex flex-col justify-start items-center gap-[15px] mt-[26%]">
            <MenuLink href="#sectionSobre" className="text-center text-[12px]">Sobre</MenuLink>
            <MenuLink href="#sectionLocalizacao" className="text-center text-[12px]">Localização</MenuLink>
            <MenuLink href="#sectionHorarioDeFuncionamento" className="text-center text-[12px]">Horário de funcionamento</MenuLink>
            <MenuLink href="#sectionEntreEmContato" className="text-center text-[12px]">Entre em contato</MenuLink>
          </div>
      </div>

      {/* Overlay */}
      {isOpen && (
          <div 
              className="hidden max-sm:block fixed inset-0 bg-main-black/25 bg-opacity-50 z-30"
              onClick={() => setIsOpen(false)}
          />
      )}
    </>
  );
}

export function ShareMenu(
  { socialMediaShareLinks }: { socialMediaShareLinks: Array<SocialMediaShareLink> }
)
{
  const floatMenuContentRef = React.useRef<HTMLDivElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const touchStartRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    const onClickOutside = (e: Event) => {
      // Only raises touchstart on mobile devices that also raise mousedown.
      if (e.type === "touchstart") {
        touchStartRef.current = true;
      } else if (e.type !== "touchstart" && touchStartRef.current) {
        touchStartRef.current = false;
        return;
      }
  
      const menuRoot = rootRef.current!;
      const menuContent = floatMenuContentRef.current!;
      const target = e.target as HTMLElement;
  
      !menuRoot ? 
        console.warn(`rootRef está vazio no componente ShareMenu!`) : null;
      !menuContent ? 
        console.warn(`floatMenuContentRef está vazio no componente ShareMenu!`) : null;
      
      // if clicked on #floatMenuContent, do nothing
      if (menuContent.outerHTML === target.outerHTML || 
        menuContent.contains(target)) return;
      // Else, clicked on menuRoot (#flaotMenu) or its children
      if (menuRoot.contains(target) || menuRoot.outerHTML === target.outerHTML) 
      {
        toggleMenuDisplay();
        return;
      }
  
      floatMenuContentRef.current!.style.display = "none";
    }
  
    const toggleMenuDisplay = () => {
      if (floatMenuContentRef.current) {
        const currentDisplay = floatMenuContentRef.current.style.display;
        const newDisplay = currentDisplay === "none" ? "block" : "none"
        floatMenuContentRef.current.style.display = newDisplay;
        
      }
    };

    document.addEventListener("touchstart", onClickOutside);
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener("touchstart", onClickOutside);
      document.removeEventListener('mousedown', onClickOutside);
    }
  }, []);


  return (
    <div 
      id="floatMenu"
      className="
        relative size-fit
      "
      ref={rootRef}
    >
      <button
        className="
          m-0 b-0 p-[5px] min-xl:p-[0.3125rem] border-[2px] min-xl:border-[0.125rem] 
          border-main-black rounded-[10px] min-xl:rounded-[0.625rem]
        "
      >
        <IconShare3 className="min-xl:size-[1.5rem]" />
      </button>
      <div 
        id="floatMenuContent"
        ref={floatMenuContentRef}
        className="
          absolute top-[110%] hidden space-y-[2px] w-[125px] min-xl:w-[7.8125rem]
         border-main-black border-1 min-xl:border-[0.0625rem] bg-main-white
          c-s:right-auto c-s:left-0 right-0 z-100
        "
        style={{display: "none"}}
      >
        {socialMediaShareLinks.map(
          (v, i) => {
            return (
              <a 
                key={i} 
                href={v.link}
                target="_blank"
                className="
                 w-full flex gap-[4px] min-xl:gap-[0.25rem] p-[4px] min-xl:p-[0.25rem] 
                 justify-center items-center cursor-pointer hover:bg-gray-200 active:bg-gray-200
                "
              >
                <span className="font-light text-[11px] min-xl:text-[0.6875rem]">Compartilhe no</span>
                <ImageIcon src={v.src} alt={v.alt} className={"max-md:size-[18px] size-[24px] min-xl:size-[1.5rem]"} />
              </a>
            );
          }
        )}
      </div>
    </div>
  );
}

export function MenuAndMediaShare()
{
  const socialMediaShareLinks = infos.infos.share.socialMedia;
  const shareMenuOn = infos.infos.share.useShareComponent;

  return (
    <div id="menuAndMediaShare" className="flex items-center gap-[0.75rem] max-sm:gap-[40px] max-c-s:gap-[20px]">
      {shareMenuOn ? <ShareMenu socialMediaShareLinks={socialMediaShareLinks} /> : null}
      <Menu />
    </div>
  );
}