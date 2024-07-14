export interface InputPasswordKicksProps {
    required?: boolean;
    placeholder?: string; 
    value?: any;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    error?: string;
    onChange?: (event: any) => void;
}