import React from "react";

import { Icon } from "./icons.jsx";


export function Menu()
{
    return (
        <nav id="menu" className="flex flex-wrap content-center px-[1.25rem] py-[0.75rem] gap-[1rem] font-medium">
          <a href="#sectionSobre" className="text-[0.75rem]">Sobre</a>
          <a href="#sectionLocalização" className="text-[0.75rem]">Localização</a>
          <a href="#sectionHorarioDeFuncionamento" className="text-[0.75rem]">Horário de funcionamento</a>
          <a href="#sectionEntreEmContato" className="text-[0.75rem]">Entre em contato</a>
        </nav>
    );
}

export function ShareOnSocialMedia({ socialMediaShareLinks })
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
        {/* temporary whats icon */}
        <Icon src="./src/assets/icons/whats-icon.svg" style="size-[24px]" />
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
                <Icon src={v.src} alt={v.alt} style={"max-md:size-[18px] size-[24px]"} />
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
      "src": "./src/assets/icons/whats-icon.svg", 
      "alt": "Botão de compartilhar no whatsapp", 
      "onClick": () => {}
    },
    {
      "src": "./src/assets/icons/instagram-icon.svg",
      "alt": "Botão de compartilhar no instagram",
      "onClick": () => {}
    },
    {
      "src": "./src/assets/icons/tiktok-icon.svg",
      "alt": "Botão de compartilhar no facebook",
      "onClick": () => {}
    },
    {
      "src": "./src/assets/icons/facebook-icon.svg",
      "alt": "Botão de compartilhar no facebook",
      "onClick": () => {}
    }
  ]
  const shareMenuOn = true;

  return (
    <div id="menuAndMediaShare" className="flex items-center gap-[0.75rem]">
      {shareMenuOn ? <ShareOnSocialMedia socialMediaShareLinks={socialMediaShareLinks} /> : null}
      <Menu />
    </div>
  );
}