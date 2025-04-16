/* 
  Handle some infos from infos.json 
*/
import infos from "./infos.json";


let siteName = infos.name;
let shareLinks = infos.infos.share.socialMedia;

// Appending query params to whasapp share urls
let whatsLinkName = "whatsapp";
let whatsUrls = shareLinks.filter((value) => value.name.toLowerCase() === whatsLinkName);
let whatsUrl = new URL(whatsUrls[0].link);
whatsUrl.searchParams.append("text", `Conheça a ${siteName} em ${window.location.origin}`);

infos.infos.share.socialMedia.forEach((value) => {
  if (value.name.toLowerCase() === whatsLinkName) value.link = whatsUrl;
})

// Appending query params to facebook share urls
let facebookLinkName = "facebook";
let facebookUrls = shareLinks.filter((value) => value.name.toLowerCase() === facebookLinkName);
let facebookUrl = new URL(facebookUrls[0].link);
facebookUrl.searchParams.append("u", `${window.location.origin}`);
facebookUrl.searchParams.append("amp;src", "sdkpreparse");

infos.infos.share.socialMedia.forEach((value) => {
  if (value.name.toLowerCase() === facebookLinkName) value.link = facebookUrl;
})



export default infos;