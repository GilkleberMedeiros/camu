import { SocialMediaIconBtn } from "./icons.jsx";


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

export function ShareOnSocialMedia()
{
  return (
    <div id="shareOnSocialMedia" className="flex justify-stretch content-center 
      gap-[5px] px-[10px] py-[5px]">
      <p id="shareText" className="text-[16px] max-md:text-[14px] max-sm:text-[12px] content-center">
        Compartilhe:
      </p>
      <div id="socialMediaIcons" className="content-center">
        <SocialMediaIconBtn 
          id="whats"
          iconSrc="./src/assets/icons/whats-icon.svg"
          iconAlt="botão de compartilhar no whatsapp."
        />
        <SocialMediaIconBtn 
          id="facebook"
          iconSrc="./src/assets/icons/facebook-icon.svg"
          iconAlt="botão de compartilhar no facebook."
        />
        <SocialMediaIconBtn
          id="instagram"
          iconSrc="./src/assets/icons/instagram-icon.svg"
          iconAlt="botão de compartilhar no instagram."
        />
      </div>
    </div>
  );
}

export function MenuAndMediaShare()
{
  return (
    <div id="menuAndMediaShare" className="flex content-center gap-[0.75rem]">
      <ShareOnSocialMedia />
      <Menu />
    </div>
  );
}