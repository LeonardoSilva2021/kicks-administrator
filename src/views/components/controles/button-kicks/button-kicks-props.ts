import { ReactNode } from "react";

export interface ButtonKicksProps {
    children?: any;
    color?: string; 
    fullWidth?: boolean;
    classnames?: string;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    justifly?: string;
    disebled?: boolean;
    display?: string;
    type?: "button" | "reset" | "submit";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "default" | "filled" | "light" | "outline" | "subtle" | "transparent" | "white";
    onClick?: () => void;
}