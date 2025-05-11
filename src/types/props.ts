import { HTMLAttributes, ReactNode, SVGAttributes } from "react";


export interface BaseProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
}

export interface LinkProps extends BaseProps {
    href: string;
    target?: string;
    rel?: string;
}

export interface ImageProps extends BaseProps {
    src: string;
    alt: string;
}

export type SvgProps = BaseProps & SVGAttributes<SVGSVGElement>;

export default BaseProps;