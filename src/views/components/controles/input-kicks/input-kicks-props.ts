import { ReactNode } from "react";

export interface InputKikcsProps {
    required?: boolean;
    placeholder?: string; 
    value?: any;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    error?: string;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    onChange?: (event: any) => void;
}