export interface CheckboxKicksProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    color?: string;
    variant?: "filled" | "outline";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "xs" | "sm" | "md" | "lg" | "xl";
    onClick?: () => void;
} 