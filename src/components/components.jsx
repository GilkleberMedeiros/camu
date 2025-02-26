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
    "imageTextCarousel": ImageTextCarousel,
}


export function ShareOnSocialMedia()
{
  return (
    <div id="shareOnSocialMedia" className="flex justify-stretch content-center 
      gap-[5px] px-[10px] py-[5px]">
      <p id="shareText" className="text-[16px] max-md:text-[14px] max-sm:text-[12px] content-center">
        Compartilhe:</p>
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

export function IconBtn({ id=Symbol().toString(), iconSrc, iconAlt, iconStyle, btnStyle, onClick=null })
{
  return (
    <button id={`${id}IconBtn`} className={btnStyle} onClick={onClick}>
      <img src={iconSrc} className={iconStyle}
        alt={iconAlt}/>
    </button>
  );
}

export function SocialMediaIconBtn({ id=Symbol().toString(), iconSrc, iconAlt, iconSize="1.5"})
{
  let style = "w-[" + iconSize.toString() + "rem]" + " h-[" + iconSize.toString() + "rem]"

  return <IconBtn 
    id={id} 
    iconSrc={iconSrc} 
    iconAlt={iconAlt} 
    iconStyle={style} 
    btnStyle="m-0 p-0 b-0"
  />
}

export function Main()
{
  return (
    <div className="m-0 b-0 p-0">
      <Section title="Sobre" children={<ImageTextCarousel />}/>
      <Section title="Localização">
        <CardsList>

        </CardsList>
      </Section>
    </div>
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

export function ImageTextCarousel()
{
  const firstCarouselImgItemRef = React.useRef(null);
  const firstCarouselTextItemRef = React.useRef(null);
  const carouselImgItemsContainerRef = React.useRef(null);
  const carouselTextItemsContainerRef = React.useRef(null);

  const imageText = [
    {
      "image": {"imageUrl": "https://picsum.photos/1000/600", "imageTitle": "image 1"}, 
      "text": {"title": "title1", "content": "content 1"}
    },
    {
      "image": {"imageUrl": "https://picsum.photos/1000/600", "imageTitle": "image 2"}, 
      "text": {"title": "title2", "content": 
        "content2 content2 content2 content2 content2 content2 content2 "+
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2 content2 content2 content2" + 
        "content2 content2 content2 content2 content2"
        }
    },
    {
      "image": {"imageUrl": "https://picsum.photos/1000/600", "imageTitle": "image 3"}, 
      "text": {"title": "title3", "content": "content3"}
    },
    {
      "image": {"imageUrl": "https://picsum.photos/1000/600", "imageTitle": "image 4"}, 
      "text": {"title": "title4", "content": "content4"}
    },
    {
      "image": {"imageUrl": "https://picsum.photos/1000/600", "imageTitle": "image 5"}, 
      "text": {"title": "title5", "content": "content5"}
    },
  ]

  let len = imageText.length;
  // Carosuel expanded container dynamic width
  let expandedContainerWidth = 100 * len;
  let expandedContainerWidthClassStr = expandedContainerWidth.toString() + "%";

  // Carousel item dynamic width
  let carouselItemWidth = 100/len;
  let carouselItemWidthClassStr = carouselItemWidth.toString() + "%";

  let textSolidOpacity = "1";
  let textOpaqueOpacity = "0.15";

  let carouselBtnsOnClick = (() => {
    // Loading variables
    let count = 1; // next to move ref
    let countMax = len;
    let countMin = 1;
    let move = carouselItemWidth;

    return function (directionFactor) {

      return function (e) {
        // Avisa se as referências usadas não forem encontradas
        !carouselTextItemsContainerRef.current ? 
          console.warn("Referência para o container de textos do carousel não encontrada.") : null

        !firstCarouselImgItemRef.current ? 
          console.warn("Referência para o primeiro item do carousel não encontrada.") : null
  
        directionFactor = directionFactor > 0 ? 1 : -1;
        let previuousTextItem = carouselTextItemsContainerRef.current.children[count - 1];

        let lastTextItem = carouselTextItemsContainerRef.current.children[countMax - 1];

        // Incrementando ou decrementando a ref do item atual (count)
        directionFactor > 0 ? count-- : count++;

        let currentTextItem = carouselTextItemsContainerRef.current.children[count - 1];
  
        // Se count excedeu o limite maximo
        if (count > countMax) {
          count = 1;

          // slide to first carousel item
          firstCarouselImgItemRef.current.style.marginLeft = "0%";
          firstCarouselTextItemRef.current.style.marginLeft = "0%";

          // Animate text items opacity
          firstCarouselTextItemRef.current.style.opacity = textSolidOpacity;
          previuousTextItem.style.opacity = textOpaqueOpacity;
        } // Se count excedeu o limite mínimo
        else if (countMin > count) {
          count = countMax;

          // slide to last carousel item
          firstCarouselImgItemRef.current.style.marginLeft = ((move * (countMax - 1)) * -1).toString() + "%";
          firstCarouselTextItemRef.current.style.marginLeft = ((move * (countMax - 1)) * -1).toString() + "%";

          // Animate text items opacity
          lastTextItem.style.opacity = textSolidOpacity;
          previuousTextItem.style.opacity = textOpaqueOpacity;
        }// Senão, mova para o próximo item
        else {
          // Pega o marginLeft atual e adiciona com valor do movimento
          let currentMarginLeft = parseInt(firstCarouselImgItemRef.current.style.marginLeft);
          let newMarginLeft = currentMarginLeft + (move * directionFactor);

          // Slide carousel items
          firstCarouselImgItemRef.current.style.marginLeft = newMarginLeft.toString()+ "%";
          firstCarouselTextItemRef.current.style.marginLeft = newMarginLeft.toString()+ "%";

          // Animate text items opacity
          currentTextItem.style.opacity = textSolidOpacity;
          previuousTextItem.style.opacity = textOpaqueOpacity;
        }
  
      }
    }
  })();


  return (
    <div id="imageTextCarouselContainer" className="w-[90%] h-[350px] flex justify-center items-center gap-[2.5rem]">
      <IconBtn 
        id="carouselLeftArrow" 
        iconSrc="./src/assets/icons/chevron-left.svg" 
        iconAlt="Botão seta esquerda do slider (para à esquerda)" 
        iconStyle="w-[1.5625rem] h-[1.5625rem]" 
        btnStyle="w-[3.125rem] h-[3.125rem] rounded-full bg-secondary-white flex justify-center items-center"
        onClick={carouselBtnsOnClick(1)}
      />

      <div 
        id="carouselContent" 
        className={"m-0 b-0 p-0 flex items-stretch max-sm:flex-col h-[350px]"} 
        style={{ width: "80%", marginLeft: "0%" }}
      >
        <div className="overflow-hidden h-[350px] w-[75%] max-sm:w-[100%] max-sm:h-[75%]">
          <div 
            id="expandedCarouselItemImgContainer" 
            className={"flex flex-nowrap"} 
            style={{ width: expandedContainerWidthClassStr }}
            ref={carouselImgItemsContainerRef}
          >
            {imageText.map((item, index) => {
              return (
                <div 
                  key={index} 
                  id={"carouselImgItem"+ (index + 1).toString()}
                  className="h-[350px] transistion-[margin-left] duration-750 ease-in-out 
                  hover:scale-105 " 
                  style={{ width: carouselItemWidthClassStr, marginLeft: "0%" }}
                  ref={index === 0 ? firstCarouselImgItemRef : null}>
                  <img src={item.image.imageUrl} alt={item.image.imageTitle} 
                    className="m-0 h-[350px] object-cover"
                    style={{ width: "100%" }}/>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden h-[350px] w-[25%] max-sm:w-[100%] max-sm:h-[25%]
          z-10 border-main-black border-y-1 border-r-1 max-sm:border-x-1 max-sm:border-b-1">
          <div 
            id="expandedCarouselItemTextContainer" 
            className={"flex flex-nowrap"} 
            style={{ width: expandedContainerWidthClassStr }}
            ref={carouselTextItemsContainerRef}
          >
            {imageText.map((item, index) => {
              return (
              <div 
                key={index} 
                id={"carouselTextItem"+ (index + 1).toString()}
                className="m-0 h-[350px] flex flex-col gap-[1rem] justify-start items-start 
                p-[1.125rem] duration-1250 ease-in-out"
                style={{ width: carouselItemWidthClassStr, marginLeft: "0%", opacity: index === 0 ? "1" : "0.15" }}
                ref={index === 0 ? firstCarouselTextItemRef : null}>

                <h3 className="text-[20px] font-medium">{item.text.title}</h3>
                <p className="text-[14px] text-wrap">{item.text.content}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      <IconBtn 
        id="carouselRightArrow" 
        iconSrc="./src/assets/icons/chevron-right.svg" 
        iconAlt="Botão seta direita do slider (para à direita)" 
        iconStyle="w-[1.5625rem] h-[1.5625rem]" 
        btnStyle="w-[3.125rem] h-[3.125rem] rounded-full bg-secondary-white flex justify-center items-center"
        onClick={carouselBtnsOnClick(-1)}
      />
    </div>
  );
}

export function CardsList({ id="", containerStyles, children })
{
  return (
    <div id={id} className={containerStyles || "flex w-[85%] p-[1.25rem] gap-[1rem]"}>
      {children}
    </div>
  );
}
