import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons.jsx"



export function ImageTextCarousel()
{
  const firstCarouselImgItemRef = React.useRef(null);
  const firstCarouselTextItemRef = React.useRef(null);
  const carouselImgItemsContainerRef = React.useRef(null);
  const carouselTextItemsContainerRef = React.useRef(null);


  // hook to handle function to move and animate carousel items
  React.useEffect(() => {
    const moveAnimateCarouselItems = (() => {
      // Loading variables
      let count = 1; // current item ref
      let countMax = len;
      let countMin = 1;
      let move = carouselItemWidth;
  
      return function (directionFactor) {
        // Se directionFactor >= 1, move o carousel para a esquerda
        // Se directionFactor <= 0, move o carousel para a direita
  
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

    const rightCarouselBtns = new Array(...document.getElementsByClassName("carousel-button-right"));
    const leftCarouselBtns = new Array(...document.getElementsByClassName("carousel-button-left"));
    const rFunc = moveAnimateCarouselItems(-1);
    const lFunc = moveAnimateCarouselItems(1);

    rightCarouselBtns.map((v) => {
      v.addEventListener("click", rFunc);
    });
    leftCarouselBtns.map((v) => {
      v.addEventListener("click", lFunc);
    });

    return () => {
      rightCarouselBtns.map((v) => {
        v.removeEventListener("click", rFunc);
      });
      leftCarouselBtns.map((v) => {
        v.removeEventListener("click", lFunc);
      });
    }

  }, []);

  // handle image scale animation
  React.useEffect(() => {
    /*
      Adding scale animation in images for mobile devices.
    */
    const onTouchStart = (e) => {
      const image = e.target.parentElement;

      image.style.scale = "105% 105% 105%";

    };

    const onTouchEnd = (e) => {
      const image = e.target.parentElement;

      image.style.scale = "100% 100% 100%";
    };
    const images = carouselImgItemsContainerRef.current
      .querySelectorAll("[id^='carouselImgItem']");
    
    images.forEach((v) => {
      v.addEventListener("touchstart", onTouchStart);
      v.addEventListener("touchend", onTouchEnd);
    });
    
    return () => {
      images.forEach((v) => {
        v.removeEventListener("touchstart", onTouchStart);
        v.removeEventListener("touchend", onTouchEnd);
      });
    }
    
  }, []);

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


  return (
    <div 
      id="imageTextCarouselContainer" 
      className="
        w-[90%] h-[350px] max-sm:h-[320px] 
        max-c-s:h-[280px] min-xl:h-[23.75rem] flex justify-center items-center gap-[2rem]
      "
    >
      <button
        id="carouselLeftArrow"
        className="
          w-[3.125rem] h-[3.125rem] max-sm:hidden portrait:hidden rounded-full 
        bg-secondary-white flex justify-center items-center cursor-pointer

          carousel-button-left
        "
      >
        <ChevronLeftIcon width="1.5625rem" height="1.5625rem" />
      </button>

      <div 
        id="carouselContent" 
        className="
          m-0 b-0 p-0 flex items-stretch max-sm:flex-col portrait:flex-col 
          h-[100%] w-[80%] max-sm:w-[100%] portrait:w-[100%]
        "
        style={{ marginLeft: "0%" }}
      >
        <div 
          className="
            relative overflow-hidden grow-3 shrink-1 basis-3 h-[100%]
          "
        >
          <div
            id="carouselLeftArrowShadow"
            className="
              absolute left-0 top-0 h-[100%] w-[6.5rem]
              z-10 flex flex-col items-center justify-center
              transition-shadow duration-150 ease-in-out
              shadow-main-black/35
              portrait:shadow-[inset_5.5rem_0_2.2rem_-2.2rem]
              max-sm:shadow-[inset_5.5rem_0_2.2rem_-2.2rem]
              hover:shadow-main-black/38
              hover:portrait:shadow-[inset_6.2rem_0_2.2rem_-2.2rem]
              hover:max-sm:shadow-[inset_6.2rem_0_2.2rem_-2.2rem]
              active:shadow-main-black/38
              active:portrait:shadow-[inset_6.2rem_0_2.2rem_-2.2rem]
              active:max-sm:shadow-[inset_6.2rem_0_2.2rem_-2.2rem]
            "
          >
            <button
              id="carouselCompactLeftArrow"
              className="
                m-0 border-0 p-0 size-fit min-sm:not-portrait:hidden
                z-10 cursor-pointer

                carousel-button-left
              "
            >
              <ChevronLeftIcon className="stroke-main-white w-[2rem] h-[2.9375rem]" />
            </button>
          </div>
          <div 
            id="expandedCarouselItemImgContainer" 
            className={"flex flex-nowrap h-[100%]"} 
            style={{ width: expandedContainerWidthClassStr }}
            ref={carouselImgItemsContainerRef}
          >
            {imageText.map((item, index) => {
              return (
                <div 
                  key={index} 
                  id={"carouselImgItem"+ (index + 1).toString()}
                  className="h-[100%] duration-750 ease-in-out
                  hover:scale-105" 
                  style={{ width: carouselItemWidthClassStr, marginLeft: "0%" }}
                  ref={index === 0 ? firstCarouselImgItemRef : null}
                >
                  <img src={item.image.imageUrl} alt={item.image.imageTitle} 
                    className="m-0 h-[100%] object-cover"
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
          <div
            id="carouselRightArrowShadow"
            className="
              absolute right-0 top-0 h-[100%] w-[6.5rem] z-10
              flex flex-col items-center justify-center
              transition-shadow duration-150 ease-in-out
              shadow-main-black/35
              portrait:shadow-[inset_-5.5rem_0_2.2rem_-2.2rem]
              max-sm:shadow-[inset_-5.5rem_0_2.2rem_-2.2rem]
              hover:shadow-main-black/38
              hover:portrait:shadow-[inset_-6.2rem_0_2.2rem_-2.2rem]
              hover:max-sm:shadow-[inset_-6.2rem_0_2.2rem_-2.2rem]
              active:shadow-main-black/38
              active:portrait:shadow-[inset_-6.2rem_0_2.2rem_-2.2rem]
              active:max-sm:shadow-[inset_-6.2rem_0_2.2rem_-2.2rem]
            "
          >
            <button
              id="carouselCompactRightArrow"
              className="
                m-0 border-0 p-0 size-fit min-sm:not-portrait:hidden
                z-10 cursor-pointer

                carousel-button-right
              "
            >
              <ChevronRightIcon className="stroke-main-white w-[2rem] h-[2.9375rem]" />
            </button>
          </div>
        </div>

        <div className="
          overflow-hidden grow-1 shrink-3 basis-1 h-[100%] z-10 border-main-black 
          min-sm:border-y-1 min-sm:border-r-1 max-sm:border-x-1 max-sm:border-b-1
          portrait:border-x-1 portrait:border-b-1 portrait:border-t-0
          "
        >
          <div 
            id="expandedCarouselItemTextContainer" 
            className={"flex flex-nowrap h-[100%]"} 
            style={{ width: expandedContainerWidthClassStr }}
            ref={carouselTextItemsContainerRef}
          >
            {imageText.map((item, index) => {
              return (
              <div 
                key={index} 
                id={"carouselTextItem"+ (index + 1).toString()}
                className="m-0 h-[100%] flex flex-col gap-[0.875rem] justify-start items-start 
                p-[1.125rem] duration-1250 ease-in-out overflow-y-auto"
                style={{ width: carouselItemWidthClassStr, marginLeft: "0%", opacity: index === 0 ? "1" : "0.15" }}
                ref={index === 0 ? firstCarouselTextItemRef : null}
              >
                <h3 className="text-[1.125rem] font-medium">{item.text.title}</h3>
                <p className="text-[0.75rem] text-wrap">{item.text.content}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
        
      <button
        id="carouselRightArrow"
        className="
          w-[3.125rem] h-[3.125rem] max-sm:hidden portrait:hidden rounded-full 
          bg-secondary-white flex justify-center items-center cursor-pointer

          carousel-button-right
        "
      >
        <ChevronRightIcon width="1.75rem" height="2rem" />
      </button>
    </div>
  );
}