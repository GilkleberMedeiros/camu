import { Logo } from "./icons.jsx";
import { MenuAndMediaShare } from "./menus.jsx";
import { Section, ZebraOpeningHoursTable } from "./containers.jsx";
import { ImageTextCarousel } from "./carousels.jsx";
import { CardsList, PhysicalAdressCard } from "./cards";


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

export function Main()
{
  const physicalAdress = {
    "name": "Camu", 
    "state": "SP", 
    "city": "Bauru", 
    "bairro": "b428d40", 
    "street": "Rua almeida dos santos",
    "number": "442",
    "cep": "22440-055",
    "viewOnMapsUrl": "https://www.google.com/maps?q=-23.541419434132827,-46.62919203153549"
  };

  const openingHoursInfo = {
    "monday": "07:00 - 12:00, 13:00 - 17:00",
    "tuesday": "07:00 - 12:00, 13:00 - 17:00",
    "wednesday": "07:00 - 12:00, 13:00 - 17:00",
    "thursday": "07:00 - 12:00, 13:00 - 17:00",
    "friday": "07:00 - 12:00, 13:00 - 17:00",
    "saturday": "Fechado",
    "sunday": "Fechado",
  };

  return (
    <div className="m-0 b-0 p-0">
      <Section title="Sobre" children={<ImageTextCarousel />}/>
      <Section title="Localização">
        <CardsList>
          <PhysicalAdressCard adressInfo={physicalAdress}>
          </PhysicalAdressCard>
        </CardsList>
      </Section>
      <Section title="Horário de funcionamento">
        <ZebraOpeningHoursTable openingHoursInfo={openingHoursInfo}/>
      </Section>
    </div>
  );
}