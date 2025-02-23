import React from "react";

export default {
    "shareOnSocialMedia": ShareOnSocialMedia ,
    "menu": Menu ,
    "logo": Logo ,
    "menuAndMediaShare": MenuAndMediaShare,
    "header": Header,
    "main": Main,
    "section": Section,
    "sectionTitle": SectionTitle,
}


export function ShareOnSocialMedia()
{
  return (
    <div id="shareOnSocialMedia" className="flex justify-stretch content-center 
      gap-[5px] px-[10px] py-[5px]">
      <p id="shareText" className="text-[16px] max-md:text-[14px] max-sm:text-[12px] content-center">
        Compartilhe:</p>
      <div id="socialMediaIcons" className="content-center">
        <IconBtn 
          id="whats"
          iconSrc="./src/assets/whats-icon.svg"
          iconAlt="botão de compartilhar no whatsapp."
        />
        <IconBtn 
          id="facebook"
          iconSrc="./src/assets/facebook-icon.svg"
          iconAlt="botão de compartilhar no facebook."
        />
        <IconBtn
          id="instagram"
          iconSrc="./src/assets/instagram-icon.svg"
          iconAlt="botão de compartilhar no instagram."
        />
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

export function IconBtn({ id=Symbol().toString(), iconSrc, iconAlt, iconSize="1.5"})
{
  let style = "w-[" + iconSize.toString() + "rem]" + " h-[" + iconSize.toString() + "rem]"

  return (
    <button id={`${id}IconBtn`} className="m-0 b-0 p-0">
      <img src={iconSrc} className={style}
        alt={iconAlt}/>
    </button>
  );
}

export function Main()
{
  return (
    <Section title="Sobre"/>
  );
}

export function Section({ title, children })
{
  return (
    <div id={`section${title}`} 
      className="flex flex-col gap-[2.5rem] items-center p-[1.25rem]">
      <SectionTitle title={title} />
      {children}
    </div>
  );
}

export function SectionTitle({ title })
{
  const standardRootFontSize = 16; // 16px

  const h2Ref = React.useRef(null);
  const hrRef = React.useRef(null);
  const [hrWidth, setHrWidth] = React.useState(300/standardRootFontSize); // 18.75rem

  React.useEffect(() => {
    if (h2Ref.current && h2Ref.current.offsetWidth >= 
      ((hrWidth * standardRootFontSize) - 50)
    ) {
      let h2Width = h2Ref.current.offsetWidth;
      setHrWidth((h2Width + 100)/standardRootFontSize);
      hrRef.current.style.width = (hrWidth).toString() + "rem";
    }
  }, []); // Will load once after the first render

  return (
    <div id={`setionTitle${title}Container`} 
      className="w-fit flex flex-col gap-[10px] items-center">
      <h2 id={`sectionTitle${title}Title`} 
        ref={h2Ref} 
        className="font-medium text-[1.5rem]">{title}</h2>
      <hr id={`sectionTitle${title}Line`} 
        ref={hrRef} 
        style={{width: (hrWidth).toString() + "rem"}}
        className="border-main-black border-t-2"
      />
    </div>
  );
}
