import { twMerge } from "tailwind-merge";

import { Card } from "../cards";
import { Link } from "../links";


export function Root({ style="", children, ...rest }) 
{
    return (
        <Card style={twMerge("flex flex-col px-[1.25rem] py-[0.875rem] gap-[0.875rem]", style)} {...rest} >
            {children}
        </Card>
    );
}

export function Title({ style="", children, ...rest }) 
{
    return (
        <h4 className={twMerge("font-semibold text-[1rem]", style)} {...rest}>
            {children}
        </h4>
    );
}

export function Content({ style="", children, ...rest }) 
{
    return (
        <div 
            className={twMerge("flex flex-col gap-[5px] items-start mb-[1.375rem]", style)}
            {...rest}
        >
            {children}
        </div>
    );
}

export function LabeledInfo({ 
    style="", 
    labelStyle="", 
    label, 
    info, 
    labelRest=[],
    ...rest 
}) 
{
    return (
        <span className={twMerge("text-[0.75rem]", style)} {...rest}>
          <span className={twMerge("font-semibold", labelStyle)} {...labelRest}>{label}</span>{info}
        </span>
    );
}

export function Info({ style="", info, ...rest }) 
{
    return (
        <span className={twMerge("text-[0.75rem]", style)} {...rest}>{info}</span>
    );
}

export function MapLink({ href="", style="", children, ...rest }) 
{
    return (
        <Link 
            style={style}
            href={href}
            rel="noopener noreferrer"
            {...rest}
        >
            {children}
        </Link>
    );
}

export default function ({ adressInfo }) 
{
    return (
        <Root>
            <Title>{adressInfo.name}</Title>
            <Content>
                <LabeledInfo 
                label={"Estado "}
                info={adressInfo.state}
                />
                <LabeledInfo 
                label={"Cidade "}
                info={adressInfo.city}
                />
                <LabeledInfo 
                label={"Bairro "}
                info={adressInfo.bairro}
                />
                <Info
                info={`${adressInfo.street}, ${adressInfo.number}`} 
                />
                <Info 
                info={adressInfo.cep}
                />
            </Content>

            <MapLink 
                style="portrait:text-[1rem]"
                href={adressInfo.viewOnMapsUrl}
            >
                Ver no google maps
            </MapLink>
        </Root>
    );
}