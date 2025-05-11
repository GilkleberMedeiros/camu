// Types for data in infos.json


export interface OpeningHours {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export interface SocialMediaShareLink {
    name: string;
    src: string;
    alt: string;
    link: string;
}

export interface AddressInfo {
  name: string;
  state: string;
  city: string;
  bairro: string;
  street: string;
  number: string;
  cep: string;
  viewOnMapsUrl: string;
}