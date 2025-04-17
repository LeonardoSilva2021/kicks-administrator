import { ReactNode } from "react";

export interface DrawerKicksProps {
    opened: boolean;
    title?: string;
    children?: any;
    position?: 'top' | 'bottom' | 'left' | 'right';
    endComponent?: ReactNode;
    onClose: () => void;
}