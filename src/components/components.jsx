import * as main from "./main.jsx";
import * as menus from "./menus.jsx";
import * as containers from "./containers.jsx";
import * as titles from "./titles.jsx";
import * as icons from "./icons.jsx";
import * as links from "./links.jsx";
import * as carousels from "./carousels.jsx";
import * as cards from "./cards.jsx";
import logo from "./logo.jsx";


export default {
  // Main components
  "header": main.Header,
  "main": main.Main,
  "footer": main.Footer,
  // Menu components
  "shareMenu": menus.ShareMenu,
  "menu": menus.Menu,
  "menuAndMediaShare": menus.MenuAndMediaShare,
  // logo components
  "logo.Container": logo.Container,
  "logo.Icon": logo.Icon,
  "logo.Title": logo.Title,
  // Containers components
  "section": containers.Section,
  "zebraOpeningHoursTable": containers.ZebraOpeningHoursTable,
  "floatingBtnsContainer": containers.FloatingBtnsContainer,
  "contactTextBox": containers.ContactTextBox,
  "modal": containers.Modal,
  // Link components
  "link": links.Link,
  "menuLink": links.MenuLink,
  // Title components
  "sectionTitle": titles.SectionTitle,
  // Carousel cmponents
  "imageTextCarousel": carousels.ImageTextCarousel,
  // Cards components
  "card": cards.Card,
  "physicalAdressCard": cards.PhysicalAdressCard,
  "seeMoreCard": cards.SeeMoreCard,
  "cardsList": cards.CardsList,
  "infinityCardsList": cards.InfinityCardsList,
  "adviceUnfinishedAppCard": cards.AdviceUnfinishedAppCard,
}

