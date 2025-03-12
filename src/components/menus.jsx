import React from "react";

import { Icon } from "./icons.jsx";


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
              <a href="#sectionSobre" className="text-[0.75rem]">Sobre</a>
              <a href="#sectionLocalização" className="text-[0.75rem]">Localização</a>
              <a href="#sectionHorarioDeFuncionamento" className="text-[0.75rem]">Horário de funcionamento</a>
              <a href="#sectionEntreEmContato" className="text-[0.75rem]">Entre em contato</a>
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
                <a href="#sectionSobre" className="text-center text-[12px]">Sobre</a>
                <a href="#sectionLocalização" className="text-center text-[12px]">Localização</a>
                <a href="#sectionHorarioDeFuncionamento" className="text-center text-[12px]">Horário de funcionamento</a>
                <a href="#sectionEntreEmContato" className="text-center text-[12px]">Entre em contato</a>
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