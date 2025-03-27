import { IconBtn } from "./icons.jsx";
import { MenuAndMediaShare } from "./menus.jsx";
import { Section, ZebraOpeningHoursTable, FloatingBtnsContainer, ContactTextBox } from "./containers.jsx";
import { ImageTextCarousel } from "./carousels.jsx";
import { CardsList, PhysicalAdressCard, SeeMoreCard } from "./cards";
import { Link } from "./links.jsx";
import logo from "./logo.jsx";

// Vite provided paths
import logoIcon from "/assets/tmp-logo.svg";
import whatsIcon from "/assets/icons/whats-icon.svg";
import mailIcon from "/assets/icons/mail.svg";


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

  return (
    <div className="m-0 b-0 p-0">
      <FloatingBtnsContainer>
        <IconBtn
          id="floatingWhats"
          iconSrc={whatsIcon}
          iconAlt="Mande uma mensagem no whatsapp."
          iconStyle="size-[2.8125rem]" 
          btnStyle="size-[4.375rem] flex justify-center items-center
          rounded-full p-[0.75rem] border-main-black border-[3px] max-sm:border-[2px] bg-main-white
          inset-shadow-main-black/25 inset-shadow-[-2px_-2px_1px_1px] cursor-pointer"
          onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
        />
        <IconBtn
          id="floatingMail"
          iconSrc={mailIcon}
          iconAlt="Mande um email."
          iconStyle="size-[2.8125rem]" 
          btnStyle="size-[4.375rem] flex justify-center items-center
          rounded-full p-[0.75rem] border-main-black border-[3px] max-sm:border-[2px] bg-main-white
          inset-shadow-main-black/25 inset-shadow-[-2px_-2px_1px_1px] cursor-pointer"
          onClick={() => window.open(`mailto:${email}`, '_blank')}
        />
      </FloatingBtnsContainer>

      <Section title="Sobre" children={<ImageTextCarousel />}/>
      <Section title="Localização">
        <CardsList>
          {
            physicalAdresses.map((v, i) => {
              return (
                <PhysicalAdressCard key={i} adressInfo={v}>
                </PhysicalAdressCard>
              );
            })
          }
        </CardsList>
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