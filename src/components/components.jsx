import * as main from "./main.jsx";
import * as menus from "./menus.jsx";
import * as containers from "./containers.jsx";
import * as titles from "./titles.jsx";
import * as icons from "./icons.jsx";
import * as carousels from "./carousels.jsx";
import * as cards from "./cards.jsx";


export default {
  "header": main.Header,
  "shareOnSocialMedia": menus.ShareOnSocialMedia ,
  "menu": menus.Menu ,
  "logo": icons.Logo ,
  "menuAndMediaShare": menus.MenuAndMediaShare,
  "main": main.Main,
  "section": containers.Section,
  "sectionTitle": titles.SectionTitle,
  "imageTextCarousel": carousels.ImageTextCarousel,
  "cardsList": cards.CardsList,
  "physicalAdressCard": cards.PhysicalAdressCard,
  "zebraOpeningHoursTable": containers.ZebraOpeningHoursTable,
  "floatingBtnsContainer": containers.FloatingBtnsContainer,
  "contactTextBox": containers.ContactTextBox,
}

