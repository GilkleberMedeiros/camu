import React from "react";

import { ImageIcon, IconShare3 } from "./icons.jsx";
import { MenuLink } from "./links.jsx";

// Vite provided paths
import whatsIcon from "/assets/icons/whats-icon.svg";
import instagramIcon from "/assets/icons/instagram-icon.svg";
import tiktokIcon from "/assets/icons/tiktok-icon.svg";
import facebookIcon from "/assets/icons/facebook-icon.svg";


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
        max-sm:hidden flex flex-wrap content-center px-[20px] py-[12px] gap-[16px] font-medium
        "
      >
        <MenuLink href="#sectionSobre" style="text-[0.75rem]">Sobre</MenuLink>
        <MenuLink href="#sectionLocalização" style="text-[0.75rem]">Localização</MenuLink>
        <MenuLink href="#sectionHorarioDeFuncionamento" style="text-[0.75rem]">Horário de funcionamento</MenuLink>
        <MenuLink href="#sectionEntreEmContato" style="text-[0.75rem]">Entre em contato</MenuLink>
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
            <MenuLink href="#sectionSobre" style="text-center text-[12px]">Sobre</MenuLink>
            <MenuLink href="#sectionLocalização" style="text-center text-[12px]">Localização</MenuLink>
            <MenuLink href="#sectionHorarioDeFuncionamento" style="text-center text-[12px]">Horário de funcionamento</MenuLink>
            <MenuLink href="#sectionEntreEmContato" style="text-center text-[12px]">Entre em contato</MenuLink>
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

export function ShareMenu({ socialMediaShareLinks })
{
  const floatMenuContentRef = React.useRef(null);

  const toggleMenuDisplay = () => {
    if (floatMenuContentRef.current) {
      const currentDisplay = floatMenuContentRef.current.style.display;
      floatMenuContentRef.current.style.display = currentDisplay === "none" ? "block" : "none";
    }
  };

  return (
    <div 
      id="floatMenu"
      className="
        relative size-fit
      "
    >
      <button
        className="m-0 b-0 p-[5px] border-[2px] border-main-black rounded-[10px]"
        onClick={toggleMenuDisplay}
      >
        <IconShare3 />
      </button>
      <div 
        id="floatMenuContent"
        ref={floatMenuContentRef}
        className="
          absolute top-[110%] hidden space-y-[2px] w-[125px]
          p-[4px] border-main-black border-1 bg-main-white 
        "
      >
        {socialMediaShareLinks.map(
          (v, i) => {
            return (
              <button 
                key={i} 
                className="
                 flex gap-[4px] justify-center items-center cursor-pointer hover:bg-gray-100
                "
                onClick={v.onClick}
              >
                <span className="font-light text-[11px] ml-[4px]">Compartilhe no</span>
                <ImageIcon src={v.src} alt={v.alt} style={"max-md:size-[18px] size-[24px]"} />
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}

export function MenuAndMediaShare()
{
  const socialMediaShareLinks = [
    {
      "src": whatsIcon, 
      "alt": "Botão de compartilhar no whatsapp", 
      "onClick": () => {}
    },
    {
      "src": instagramIcon,
      "alt": "Botão de compartilhar no instagram",
      "onClick": () => {}
    },
    {
      "src": tiktokIcon,
      "alt": "Botão de compartilhar no facebook",
      "onClick": () => {}
    },
    {
      "src": facebookIcon,
      "alt": "Botão de compartilhar no facebook",
      "onClick": () => {}
    }
  ]
  const shareMenuOn = true;

  return (
    <div id="menuAndMediaShare" className="flex items-center gap-[0.75rem] max-sm:gap-[40px] max-c-s:gap-[20px]">
      {shareMenuOn ? <ShareMenu socialMediaShareLinks={socialMediaShareLinks} /> : null}
      <Menu />
    </div>
  );
}