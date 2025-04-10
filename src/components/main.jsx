import { IconBtn, ImageIcon } from "./icons.jsx";
import { MenuAndMediaShare } from "./menus.jsx";
import { Section, ZebraOpeningHoursTable, FloatingBtnsContainer, ContactTextBox } from "./containers.jsx";
import { ImageTextCarousel } from "./carousels.jsx";
import { PhysicalAdressCard, InfinityCardsList } from "./cards";
import { Link } from "./links.jsx";
import logo from "./logo.jsx";

// Vite provided paths
import logoIcon from "/assets/tmp-logo.svg";
import whatsIcon from "/assets/icons/whats-icon.svg";
import facebookIcon from "/assets/icons/facebook-icon.svg";
import instagramIcon from "/assets/icons/instagram-icon.svg";
import tiktokIcon from "/assets/icons/tiktok-icon.svg";
import mailIcon from "/assets/icons/mail.svg";
import React from "react";


export function Header()
{
  const logoTitle = "Camu";

  return (
    <header 
      className="
        p-[1.125rem] flex justify-between content-center border-b-2 
        border-b-main-black shadow-main-black/25 shadow-[0_4px_2px_0] 
        min-xl:border-b-[0.125rem] min-xl:shadow-[0_0.25rem_0.125rem_0]
      "
    >
      <logo.Container>
        <logo.Icon src={logoIcon} />
        <logo.Title title={logoTitle} />
      </logo.Container>
      <MenuAndMediaShare />
    </header>
  );
}

export function Main()
{
  const parentRef = React.useRef(null);
  const targetRef = React.useRef(null);

  React.useEffect(() => {
    // Wait for refs to be available
    if (!parentRef.current || !targetRef.current) return;

    const parent = parentRef.current;
    const target = targetRef.current;

    const worker = new Worker(new URL(
      "../workers/isWithinBounds.js", 
      import.meta.url
    ), { type: "module" } );

    // Handle worker response
    worker.onmessage = (e) => {
      const { isWithinBounds } = e.data;
      target.style.position = isWithinBounds ? 'fixed' : 'absolute';
    };

    // Add event listeners with debounce for performance
    let timeout = null;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Send data to worker
        worker.postMessage({
          parentRect: parent.getBoundingClientRect(),
          targetRect: target.getBoundingClientRect()
        });
      }, 100);
    };

    // Add listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    worker.postMessage({
      parentRect: parent.getBoundingClientRect(),
      targetRect: target.getBoundingClientRect(),
    });

    // Cleanup
    return () => {
      worker.terminate();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []); // Empty dependency array = run once on mount

  const physicalAdresses = [
    {
      "name": "Camu", 
      "state": "SP", 
      "city": "Bauru", 
      "bairro": "b428d40", 
      "street": "Rua almeida dos santos",
      "number": "442",
      "cep": "22440-055",
      "viewOnMapsUrl": "https://www.google.com/maps?q=-23.541419434132827,-46.62919203153549"
    },
    {
      "name": "Camu", 
      "state": "RJ", 
      "city": "Jacarézinho", 
      "bairro": "bairro", 
      "street": "Rua Vinícius da Silva",
      "number": "157",
      "cep": "44228-777",
      "viewOnMapsUrl": "https://www.google.com/maps?q=-22.541419434132827,-45.62919203153549"
    },
    {
      "name": "Camu", 
      "state": "SP", 
      "city": "Mauá", 
      "bairro": "Distrito", 
      "street": "Rua vanessa lopes",
      "number": "2222",
      "cep": "0000-000",
      "viewOnMapsUrl": "https://www.google.com/maps?q=-20.541419434132827,-40.62919203153549"
    },
  ];

  const openingHoursInfo = {
    "monday": "07:00 - 12:00, 13:00 - 17:00",
    "tuesday": "07:00 - 12:00, 13:00 - 17:00",
    "wednesday": "07:00 - 12:00, 13:00 - 17:00",
    "thursday": "07:00 - 12:00, 13:00 - 17:00",
    "friday": "07:00 - 12:00, 13:00 - 17:00",
    "saturday": "Fechado",
    "sunday": "Fechado",
  };

  const phoneNumber = "5511000000000";
  const email = "example@gmail.com";

  const useFloatingButtons = true;

  return (
    <div 
      className="m-0 b-0 p-0 relative"
      ref={parentRef}
    >
      {useFloatingButtons && 
        <FloatingBtnsContainer
          style="mb-4" 
          ref={targetRef}
        >
          <a 
            id="floatingWhats"
            href={`https://wa.me/${phoneNumber}`}
            className="
              size-[4.375rem] flex justify-center items-center
              rounded-full p-[0.75rem] border-main-black 
              border-[3px] max-sm:border-[2px] min-xl:border-[0.1875rem]
              bg-main-white inset-shadow-main-black/25 max-sm:hidden
              inset-shadow-[-0.125rem_-0.125rem_0.0625rem_0.0625rem] cursor-pointer
            "
          >
            <ImageIcon 
              src={whatsIcon} 
              alt="Mande uma mensagem no whatsapp."
              className="size-[2.8125rem]"
            />
          </a>
          <a 
            id="floatingMail"
            href={`mailto:${email}`}
            className="
              size-[4.375rem] flex justify-center items-center
              rounded-full p-[0.75rem] border-main-black 
              border-[3px] max-sm:border-[2px] min-xl:border-[0.1875rem]
              bg-main-white inset-shadow-main-black/25 max-sm:hidden
              inset-shadow-[-0.125rem_-0.125rem_0.0625rem_0.0625rem] cursor-pointer
            "
          >
            <ImageIcon 
              src={mailIcon} 
              alt="Mande um email."
              className="size-[2.8125rem]"
            />
          </a>
        </FloatingBtnsContainer>
      }

      <Section title="Sobre" children={<ImageTextCarousel />}/>
      <Section title="Localização" style="pr-0">
        <InfinityCardsList>
          {
            physicalAdresses.map((v, i) => {
              return (
                <PhysicalAdressCard key={i} adressInfo={v}>
                </PhysicalAdressCard>
              );
            })
          }
        </InfinityCardsList>
      </Section>
      <Section title="Horário de funcionamento">
        <ZebraOpeningHoursTable openingHoursInfo={openingHoursInfo}/>
      </Section>
      <Section title="Entre em contato">
        <ContactTextBox>
          <span className="text-[0.8125rem] text-center">
            <Link href={`mailto:${email}`} style="text-[0.8125rem]">Mande um email</Link> em {email}
          </span>
          <span className="text-[0.9375rem] font-medium">
            OU
          </span>
          <span className="text-[0.8125rem] text-center">
            Ligue,&nbsp;
            <Link href={`https://wa.me/${phoneNumber}`} style="text-[0.8125rem]">
              mande uma mensagem
            </Link>&nbsp;
            pelo whatsapp em {phoneNumber}
          </span>
        </ContactTextBox>
      </Section>
    </div>
  );
}

export function Footer() 
{
  let socialMedia = [
    { 
      name: "whatsapp", 
      src: whatsIcon, 
      alt: "Veja nosso perfil no whatsapp.", 
      link: `https://wa.me/5521000000000`, 
    },
    {
      name: "instagram",
      src: instagramIcon,
      alt: "Veja nosso perfil no instagram.",
      link: "https://www.instagram.com/vii_zedek/",
    },
    {
      name: "facebook",
      src: facebookIcon,
      alt: "Veja nosso perfil no facebook.",
      link: "https://www.facebook.com/username",
    },
    {
      name: "tiktok",
      src: tiktokIcon,
      alt: "Veja nosso perfil no tiktok.",
      link: "https://tiktok.com/@username",
    },
  ];

  return (
    <div 
      className="
        w-full flex justify-between px-[12px] py-[10px] 
        min-xl:px-[0.875rem] min-xl:py-[0.75rem] bg-secondary-white
      "
    >
      <logo.Container>
        <logo.Icon src={logoIcon} />
        <div className="size-[100%] flex flex-col gap-[5px]">
          <span className="font-light text-[0.875rem]">Encontre-nos em </span>
          <div 
            className="
              flex flex-wrap justify-start items-start gap-[7px] min-xl:gap-[0.625rem]
            "
          >
            {socialMedia.map((v, i) => {
              return (
                <a href={v.link} >
                  <ImageIcon src={v.src} alt={v.alt} className="size-[1.75rem]" />
                </a>
              );
            })}
          </div>
        </div>
      </logo.Container>
      <div className="flex justify-end items-end">
        <span className="space-x-[5px] min-c-s:space-x-[10px] min-sm:space-x-[1.25rem]">
          <span className="font-light text-[0.875rem]">Criado por </span>
          <Link style="font-extralight text-[0.875rem]">Gilkleber Medeiros</Link>
        </span>
      </div>
    </div>
  );
}