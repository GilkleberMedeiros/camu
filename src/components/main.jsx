import { ImageIcon } from "./icons.jsx";
import { MenuAndMediaShare } from "./menus.jsx";
import { Section, ZebraOpeningHoursTable, FloatingBtnsContainer, ContactTextBox } from "./containers.jsx";
import { ImageTextCarousel } from "./carousels.jsx";
import { InfinityCardsList } from "./cards.jsx";
import { Link } from "./links.jsx";
import logo from "./logo.jsx";
import * as AdressCard from "./composed/AdressCard.jsx";
import PhysicalAdressCard from "./composed/AdressCard.jsx";
import infos from "../infos.js";

// Vite provided paths
import whatsIcon from "/assets/icons/whats-icon.svg";
import mailIcon from "/assets/icons/mail.svg";
import React from "react";


export function Header()
{
  const logoTitle = infos.infos.logo.logoTitle;
  const logoIcon = infos.infos.logo.logoImgPath;

  return (
    <header 
      className="
        p-[1.125rem] flex justify-between content-center border-b-2 
        border-b-main-black shadow-main-black/25 shadow-[0_4px_2px_0] 
        min-xl:border-b-[0.125rem] min-xl:shadow-[0_0.25rem_0.125rem_0]
      "
    >
      <logo.Container>
        <a href="/">
          <logo.Icon src={logoIcon} />
        </a>
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

  const physicalAdresses = infos.infos.physicalAdresses;

  const openingHoursInfo = infos.infos.openingHours;

  const phoneNumber = infos.infos.contact.phoneNumber;
  const phoneNumberDisplay = infos.infos.contact.phoneNumberDisplay;
  const email = infos.infos.contact.email;

  const useFloatingButtons = infos.infos.useFloatingButtons;

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
                <PhysicalAdressCard key={i} adressInfo={v} />
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
            pelo whatsapp em {phoneNumberDisplay}
          </span>
        </ContactTextBox>
      </Section>
    </div>
  );
}

export function Footer() 
{
  const logoIcon = infos.infos.logo.logoImgPath;
  const socialMedia = infos.infos.socialMedia;

  return (
    <div 
      className="
        w-full flex justify-between px-[12px] py-[10px] 
        min-xl:px-[0.875rem] min-xl:py-[0.75rem] bg-secondary-white
      "
    >
      <logo.Container>
        <a href="/">
          <logo.Icon src={logoIcon} />
        </a>
        <div className="size-[100%] flex flex-col gap-[5px]">
          <span className="font-light text-[0.875rem]">Encontre-nos em </span>
          <div 
            className="
              flex flex-wrap justify-start items-start gap-[7px] min-xl:gap-[0.625rem]
            "
          >
            {socialMedia.map((v, i) => {
              return (
                <a key={i} href={v.link} >
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
          <Link href="https://linktr.ee/gilkleber.dev" style="font-extralight text-[0.875rem]">Gilkleber Medeiros</Link>
        </span>
      </div>
    </div>
  );
}

export function Locations() 
{
  const [ separatedAdresses, setSeparatedAdresses ] = React.useState([]);
  const [ getStateLongName, setGetStateLongName ] = React.useState(() => {});

  React.useEffect(() => {
    const standardizeString = (str) => {
      /**
        Converts a string to uppercase, 
        removes spaces and diacritics
      */
      return str
        .normalize('NFD')                // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/\s+/g, '')             // Remove spaces
        .toUpperCase();
    }
  
    const BRAZILIAN_STATES = {
      // North
      AM: "Amazonas",
      AMAZONAS: "Amazonas",
      PA: "Pará",
      PARA: "Pará",
      AC: "Acre",
      ACRE: "Acre",
      RO: "Rondônia",
      RONDONIA: "Rondônia",
      RR: "Roraima",
      RORAIMA: "Roraima",
      AP: "Amapá",
      AMAPA: "Amapá",
      TO: "Tocantins",
      TOCANTINS: "Tocantins",
    
      // Northeast
      MA: "Maranhão",
      MARANHAO: "Maranhão",
      PI: "Piauí",
      PIAUI: "Piauí",
      CE: "Ceará",
      CEARA: "Ceará",
      RN: "Rio Grande do Norte",
      RIOGRANDEDONORTE: "Rio Grande do Norte",
      PB: "Paraíba",
      PARAIBA: "Paraíba",
      PE: "Pernambuco",
      PERNAMBUCO: "Pernambuco",
      AL: "Alagoas",
      ALAGOAS: "Alagoas",
      SE: "Sergipe",
      SERGIPE: "Sergipe",
      BA: "Bahia",
      BAHIA: "Bahia",
    
      // Southeast
      MG: "Minas Gerais",
      MINASGERAIS: "Minas Gerais",
      ES: "Espírito Santo",
      ESPIRITOSANTO: "Espírito Santo",
      RJ: "Rio de Janeiro",
      RIODEJANEIRO: "Rio de Janeiro",
      SP: "São Paulo",
      SAOPAULO: "São Paulo",
    
      // South
      PR: "Paraná",
      PARANA: "Paraná",
      SC: "Santa Catarina",
      SANTACATARINA: "Santa Catarina",
      RS: "Rio Grande do Sul",
      RIOGRANDEDOSUL: "Rio Grande do Sul",
    
      // Center-West
      MS: "Mato Grosso do Sul",
      MATOGROSSODOSUL: "Mato Grosso do Sul",
      MT: "Mato Grosso",
      MATOGROSSO: "Mato Grosso",
      GO: "Goiás",
      GOIAS: "Goiás",
      DF: "Distrito Federal",
      DISTRITOFEDERAL: "Distrito Federal"
    };

    // setState value can be either a normal value or a function
    setGetStateLongName(() => (state) => BRAZILIAN_STATES[standardizeString(state)]);
  
    // maps a specific BRAZILIAN_STATES value to adressesSorted index
    let holder = {};
    let adressesSorted = []; // The physicalAdresses separated by state
  
    for (let i = 0; i < physicalAdresses.length; i++) 
    {
      let adress = physicalAdresses[i];
      let BS_value = BRAZILIAN_STATES[standardizeString(adress.state)];
      let index = holder[BS_value]; 

      // if state index is already registered in holder
      if (index !== undefined) 
      {
        adressesSorted[index].push(adress);
        continue;
      }

      let next_index = adressesSorted.length;
      // push new state list to adressesSorted 
      adressesSorted.push([adress]);
      // register new state list index in holder
      holder[BS_value] = next_index;
    }

    setSeparatedAdresses(adressesSorted);

  }, []);

  const physicalAdresses = infos.infos.physicalAdresses;

  return (
    <>
      {separatedAdresses.map((v, i) => {
        let stateLongname = getStateLongName(v[0].state);

        return (
          <Section key={i} title={stateLongname}>
            <div className="flex flex-wrap gap-[1rem] justify-center align-center">
              {v.map((v, i) => {
                return (
                  <AdressCard.Root key={i} style="max-c-s:min-w-[240px]">
                    <AdressCard.Title style="portrait:text-[1.25rem]">{v.name}</AdressCard.Title>
                    <AdressCard.Content>
                      <AdressCard.LabeledInfo 
                        style="portrait:text-[1rem]"
                        label={"Estado "}
                        info={v.state}
                      />
                      <AdressCard.LabeledInfo 
                        style="portrait:text-[1rem]"
                        label={"Cidade "}
                        info={v.city}
                      />
                      <AdressCard.LabeledInfo 
                        style="portrait:text-[1rem]"
                        label={"Bairro "}
                        info={v.bairro}
                      />
                      <AdressCard.Info
                        style="portrait:text-[1rem]"
                        info={`${v.street}, ${v.number}`} 
                      />
                      <AdressCard.Info 
                        style="portrait:text-[1rem]"
                        info={v.cep}
                      />
                    </AdressCard.Content>

                    <AdressCard.MapLink 
                      style="portrait:text-[1rem]"
                      href={v.viewOnMapsUrl}
                    >
                      Ver no google maps
                    </AdressCard.MapLink>
                  </AdressCard.Root>
                );
              })}
            </div>
          </Section>
        );
      })}
    </>
  );
}