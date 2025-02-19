
export default {
    "shareOnSocialMedia": ShareOnSocialMedia ,
    "menu": Menu ,
    "logo": Logo ,
    "menuAndMediaShare": MenuAndMediaShare,
    "header": Header,
}

export function ShareOnSocialMedia()
{
    return (
      <div id="shareOnSocialMedia" className="flex justify-stretch content-center 
        gap-[5px] px-[10px] py-[5px]">
        <p id="shareText" className="text-[16px] max-md:text-[14px] max-sm:text-[12px] content-center">
          Compartilhe:</p>
        <div id="socialMediaIcons" className="content-center">
          <button id="whatsIconBtn" className="m-0 b-0 p-0">
            <img src="./src/assets/whats-icon.svg" className="w-[1.5rem] h-[1.5rem]" 
              alt="botão de compartilhar no whatsapp."/>
          </button>
          <button id="facebookIconBtn" className="m-0 b-0 p-0">
            <img src="./src/assets/facebook-icon.svg" className="w-[1.5rem] h-[1.5rem]" 
              alt="botão de compartilhar no facebook."/>
          </button>
          <button id="instagramIconBtn" className="m-0 b-0 p-0">
            <img src="./src/assets/instagram-icon.svg" className="w-[1.5rem] h-[1.5rem]" 
              alt="botão de compartilhar no instagram."/>
          </button>
        </div>
      </div>
    );
}

export function Menu()
{
    return (
        <nav id="menu" className="flex flex-wrap content-center px-[1.25rem] py-[0.75rem] gap-[1rem] font-medium">
          <a href="" className="text-[0.75rem]">Sobre</a>
          <a href="" className="text-[0.75rem]">Localização</a>
          <a href="" className="text-[0.75rem]">Horário de funcionamento</a>
          <a href="" className="text-[0.75rem]">Entre em contato</a>
        </nav>
    );
}

export function Logo()
{
  return (
    <div id="logo" className="flex items-center gap-[10px] grow-0 font-medium">
      <img id="logoImg" className="w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px]" 
        src="./src/assets/tmp-logo.svg" alt="logo"/>
      <h1 id="logoTitle" className="text-[30px] max-md:text-[25px] max-sm:text-[18px]">Camu</h1>
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

export function Header()
{
  return (
    <header className="p-[1.125rem] flex justify-between 
      content-center border-b-2 border-b-main-black shadow-main-black/25 shadow-[0_4px_2px_0]">
      <Logo />
      <MenuAndMediaShare />
    </header>
  );
}
