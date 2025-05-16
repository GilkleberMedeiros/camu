"use client";

import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { Modal } from "@/components/containers";
import infos from "@/infos";


export function ImageTextCarousel()
{
  const firstCarouselImgItemRef = React.useRef<HTMLDivElement>(null);
  const firstCarouselTextItemRef = React.useRef<HTMLDivElement>(null);
  const carouselImgItemsContainerRef = React.useRef<HTMLDivElement>(null);
  const carouselTextItemsContainerRef = React.useRef<HTMLDivElement>(null);

  const touchStartRef = React.useRef<boolean>(false);

  // Handle image modal
  React.useEffect(() => {
    const images = Array.from(document.getElementsByClassName("carousel-img"));
    const modal = document.getElementById("carouselImgModal")!;
    const modalContent = document.getElementById("modalContent")!;

    !images ? 
        console.warn(`
            Componentes com classe carousel-img não foram encontrados. 
            FROM_COMPONENT: componente ImageTextCarousel!
        `) : null;
    !modal ? 
        console.warn(`
            Componente com id carouselImgModal não foi encontrado. 
            FROM_COMPONENT: componente ImageTextCarousel!
        `) : null;
    !modalContent ? 
        console.warn(`
            Componente com id modalContent não foi encontrado. 
            FROM_COMPONENT: componente ImageTextCarousel!
        `) : null;

    const onImageClick = function (e: Event) {
        const currentTarget = e.currentTarget as HTMLElement;
        const cloned = currentTarget.cloneNode() as HTMLElement;
      modalContent.innerHTML = cloned.outerHTML;
      modal.style.display = "flex";
      (modal as HTMLDialogElement).showModal();
    };
    const onModalClose = function (e: Event) {
      modalContent.innerHTML = "";
      (modal as HTMLDialogElement).style.display = "none";
      (modal as HTMLDialogElement).close();
    };
    const onClickOutside = function (e: Event) {
      // Only raises touchstart on mobile devices that also raise mousedown.
      if (e.type === "touchstart") {
        touchStartRef.current = true;
      } else if (e.type !== "touchstart" && touchStartRef.current) {
        touchStartRef.current = false;
        return;
      }

      let target = e.target as HTMLElement;

      // Do nothing if clicked on modalContent or its children
      if (modalContent.contains(target) || 
        modalContent.outerHTML === target.outerHTML) return;

      onModalClose(e);

      return;
    };

    images.map((v) => {
      v.addEventListener("click", onImageClick);
    });
    modal.addEventListener("close", onModalClose);
    document.addEventListener("touchstart", onClickOutside);
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      images.map((v) => {
        v.removeEventListener("click", onImageClick);
      });
      modal.removeEventListener("close", onModalClose);
      document.removeEventListener("touchstart", onClickOutside);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  // hook to handle function to move and animate carousel items
  React.useEffect(() => {
    const moveAnimateCarouselItems = (() => {
      // Loading variables
      let current = 1; // current item ref
      let currentMax = len;
      let currentMin = 1;
      let move = carouselItemWidth;
  
      return function (directionFactor: 1 | -1) {
        // Se directionFactor >= 1, move o carousel para a esquerda
        // Se directionFactor <= 0, move o carousel para a direita
  
        return function (e: Event) {
          // Avisa se as referências usadas não forem encontradas
          !carouselTextItemsContainerRef.current ? 
            console.warn("Referência para o container de textos do carousel não encontrada.") : null
  
          !firstCarouselImgItemRef.current ? 
            console.warn("Referência para o primeiro item do carousel não encontrada.") : null
    
          directionFactor = directionFactor > 0 ? 1 : -1;
          let previuousTextItem = carouselTextItemsContainerRef.current!.children[current - 1] as HTMLElement;
  
          let lastTextItem = carouselTextItemsContainerRef.current!.children[currentMax - 1] as HTMLElement;
  
          // Incrementando ou decrementando a ref do item atual (current)
          directionFactor > 0 ? current-- : current++;
  
          let currentTextItem = carouselTextItemsContainerRef.current!.children[current - 1] as HTMLElement;
    
          // Se current excedeu o limite maximo
          if (current > currentMax) {
            current = 1;
  
            // slide to first carousel item
            firstCarouselImgItemRef.current!.style.marginLeft = "0%";
            firstCarouselTextItemRef.current!.style.marginLeft = "0%";
  
            // Animate text items opacity
            firstCarouselTextItemRef.current!.style.opacity = textSolidOpacity;
            previuousTextItem.style.opacity = textOpaqueOpacity;

            // load img next to the current img according the directionFactor
          } // Se current excedeu o limite mínimo
          else if (currentMin > current) {
            current = currentMax;
  
            // slide to last carousel item
            firstCarouselImgItemRef.current!.style.marginLeft = ((move * (currentMax - 1)) * -1).toString() + "%";
            firstCarouselTextItemRef.current!.style.marginLeft = ((move * (currentMax - 1)) * -1).toString() + "%";
  
            // Animate text items opacity
            lastTextItem.style.opacity = textSolidOpacity;
            previuousTextItem.style.opacity = textOpaqueOpacity;

            // load img next to the current img according the directionFactor
          }// Senão, mova para o próximo item
          else {
            // Pega o marginLeft atual e adiciona com valor do movimento
            let currentMarginLeft = parseInt(firstCarouselImgItemRef.current!.style.marginLeft);
            let newMarginLeft = currentMarginLeft + (move * directionFactor);
  
            // Slide carousel items
            firstCarouselImgItemRef.current!.style.marginLeft = newMarginLeft.toString()+ "%";
            firstCarouselTextItemRef.current!.style.marginLeft = newMarginLeft.toString()+ "%";
  
            // Animate text items opacity
            currentTextItem.style.opacity = textSolidOpacity;
            previuousTextItem.style.opacity = textOpaqueOpacity;

            // load img next to the current img according the directionFactor
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
    const onTouchStart = (e: Event) => { 
      const target = e.target as HTMLElement;
      const image = target.parentElement;

      !image ? 
        console.warn(`
            Referência de image.parentElement não encontrada. 
            FROM: Componente ImageTextCarousel > 
            useEffect tratador da animação de scale da imagem > função onTouchStart.
        `) : null;

      image!.style.scale = "105% 105% 105%";

    };

    const onTouchEnd = (e: Event) => { 
        const target = e.target as HTMLElement;
      const image = target.parentElement;

      !image ? 
        console.warn(`
            Referência de image.parentElement não encontrada. 
            FROM: Componente ImageTextCarousel > 
            useEffect tratador da animação de scale da imagem > função onTouchEnd.
        `) : null;

      image!.style.scale = "100% 100% 100%";
    };

    !carouselImgItemsContainerRef.current ? 
        console.warn(`
            Referência para carouselImgItemsContainerRef não encontrada. 
            FROM: Componente ImageTextCarousel > useEffect tratador da animação de scale da imagem.
        `) : null;

    const images = carouselImgItemsContainerRef.current!
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

  const imageText = infos.infos.imageText;

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
        max-c-s:h-[280px] min-xl:h-[21.875rem] flex justify-center items-center gap-[2rem]
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
          {/* carousel img modal */}
          <Modal
            id="carouselImgModal"
            className="
              m-0 border-0 p-0 outline-0 min-w-[100%] min-h-[100%]
              flex justify-center items-center 
              bg-main-black/25 backdrop:bg-main-black/25
              z-[-50]
            "
          >
            <div
              id="modalContent"
              className="
                m-0 border-0 p-0 w-[85%] h-[70vh] max-w-[85%] max-h-[70vh] 
              "
            >
            </div>
          </Modal>
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
                  <img 
                    src={item.image.imageUrl} 
                    alt={item.image.imageTitle}
                    className="
                      carousel-img 
                      
                      m-0 h-[100%] object-cover
                    "
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
                className="m-0 h-[100%] text-[1rem] flex flex-col gap-[0.875rem] justify-start items-start 
                p-[1.125rem] duration-1250 ease-in-out overflow-y-auto"
                style={{ width: carouselItemWidthClassStr, marginLeft: "0%", opacity: index === 0 ? "1" : "0.15" }}
                ref={index === 0 ? firstCarouselTextItemRef : null}
              >
                <h3 className="text-[1.125em] font-medium">{item.text.title}</h3>
                <p className="text-[0.75em] text-wrap">{item.text.content}</p>
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