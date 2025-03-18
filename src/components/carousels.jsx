import React from "react";

import { IconBtn } from "./icons.jsx"

import chevronRight from "/assets/icons/chevron-right.svg";
import chevronLeft from "/assets/icons/chevron-left.svg";


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

  const len = imageText.length;
  // Carosuel expanded container dynamic width
  const expandedContainerWidth = 100 * len;
  const expandedContainerWidthClassStr = expandedContainerWidth.toString() + "%";

  // Carousel item dynamic width
  const carouselItemWidth = 100/len;
  const carouselItemWidthClassStr = carouselItemWidth.toString() + "%";

  const textSolidOpacity = "1";
  const textOpaqueOpacity = "0.15";

  const carouselBtnsOnClick = (() => {
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
        iconSrc={chevronLeft}
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
                p-[1.125rem] duration-1250 ease-in-out overflow-y-auto"
                style={{ width: carouselItemWidthClassStr, marginLeft: "0%", opacity: index === 0 ? "1" : "0.15" }}
                ref={index === 0 ? firstCarouselTextItemRef : null}>

                <h3 className="text-[1.25rem] font-medium">{item.text.title}</h3>
                <p className="text-[0.875rem] text-wrap">{item.text.content}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      <IconBtn 
        id="carouselRightArrow" 
        iconSrc={chevronRight}
        iconAlt="Botão seta direita do slider (para à direita)" 
        iconStyle="w-[1.5625rem] h-[1.5625rem]" 
        btnStyle="w-[3.125rem] h-[3.125rem] rounded-full bg-secondary-white flex justify-center items-center"
        onClick={carouselBtnsOnClick(-1)}
      />
    </div>
  );
}