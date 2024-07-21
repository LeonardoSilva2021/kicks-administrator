export interface DrawerKicksProps {
    opened: boolean;
    title?: string;
    children?: any;
    position?: 'top' | 'bottom' | 'left' | 'right'
    onClose: () => void;
}