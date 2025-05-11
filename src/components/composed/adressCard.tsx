import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Card } from "@/components/cards";
import { Link } from "@/components/links";
import BaseProps, { LinkProps } from "@/types/props";
import { AddressInfo } from "@/types/infos";


export function Root({ className="", children, ...rest }: BaseProps) 
{
    return (
        <Card className={twMerge("flex flex-col px-[1.25rem] py-[0.875rem] gap-[0.875rem]", className)} {...rest} >
            {children}
        </Card>
    );
}

export function Title({ className="", children, ...rest }: BaseProps) 
{
    return (
        <h4 className={twMerge("font-semibold text-[1rem]", className)} {...rest}>
            {children}
        </h4>
    );
}

export function Content({ className="", children, ...rest }: BaseProps) 
{
    return (
        <div 
            className={twMerge("flex flex-col gap-[5px] items-start mb-[1.375rem]", className)}
            {...rest}
        >
            {children}
        </div>
    );
}

interface LabeledInfoProps extends BaseProps {
    labelClassName?: string;
    label: string;
    info: string;
    labelRest?: HTMLAttributes<HTMLElement>;
}

export function LabeledInfo({ 
    className="", 
    labelClassName="", 
    label, 
    info, 
    labelRest,
    ...rest 
}: LabeledInfoProps) 
{
    return (
        <span className={twMerge("text-[0.75rem]", className)} {...rest}>
          <span className={twMerge("font-semibold", labelClassName)} {...labelRest}>{label}</span>{info}
        </span>
    );
}

export function Info({ className="", info, ...rest }: BaseProps & { info: string }) 
{
    return (
        <span className={twMerge("text-[0.75rem]", className)} {...rest}>{info}</span>
    );
}

export function MapLink({ href="", className="", children, ...rest }: LinkProps) 
{
    return (
        <Link 
            className={className}
            href={href}
            rel="noopener noreferrer"
            {...rest}
        >
            {children}
        </Link>
    );
}

export default function ({ adressInfo }: { adressInfo: AddressInfo }) 
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
                className="portrait:text-[1rem]"
                href={adressInfo.viewOnMapsUrl}
            >
                Ver no google maps
            </MapLink>
        </Root>
    );
}