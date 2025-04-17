import { ReactNode } from "react";
import { EnumMask } from "../../../../models/enuns/app/enum-mask";

export interface InputKikcsProps {
    required?: boolean;
    label?: string;
    withAsterisk?: boolean;
    placeholder?: string; 
    value?: any;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    error?: string;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    typeMask?: EnumMask;
    onChange?: (event: any) => void;
}