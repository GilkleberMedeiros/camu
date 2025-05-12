import { Section } from "@/components/containers";
import * as AdressCard from "@/components/composed/adressCard";
import infos from "@/infos";
import { AddressInfo } from "@/types/infos";


export default function Locations() 
{
  let separatedAdresses: Array<Array<AddressInfo>> = [];
  const getStateLongName = (state: string) => BRAZILIAN_STATES[standardizeString(state)];

  const physicalAdresses = infos.infos.physicalAdresses;

  const standardizeString = (str: string) => {
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

  const BRAZILIAN_STATES: { [key: string]: string } = {
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

  // maps a specific BRAZILIAN_STATES value to adressesSorted index
  let holder: { [key: string]: number } = {};
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

  separatedAdresses = adressesSorted;

  return (
    <>
      {separatedAdresses.map((v, i) => {
        let stateLongname = getStateLongName(v[0].state);

        return (
          <Section key={i} title={stateLongname}>
            <div className="flex flex-wrap gap-[1rem] justify-center align-center">
              {v.map((v, i) => {
                return (
                  <AdressCard.Root key={i} className="max-c-s:min-w-[240px]">
                    <AdressCard.Title className="portrait:text-[1.25rem]">{v.name}</AdressCard.Title>
                    <AdressCard.Content>
                      <AdressCard.LabeledInfo 
                        className="portrait:text-[1rem]"
                        label={"Estado "}
                        info={v.state}
                      />
                      <AdressCard.LabeledInfo 
                        className="portrait:text-[1rem]"
                        label={"Cidade "}
                        info={v.city}
                      />
                      <AdressCard.LabeledInfo 
                        className="portrait:text-[1rem]"
                        label={"Bairro "}
                        info={v.bairro}
                      />
                      <AdressCard.Info
                        className="portrait:text-[1rem]"
                        info={`${v.street}, ${v.number}`} 
                      />
                      <AdressCard.Info 
                        className="portrait:text-[1rem]"
                        info={v.cep}
                      />
                    </AdressCard.Content>

                    <AdressCard.MapLink 
                      className="portrait:text-[1rem]"
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