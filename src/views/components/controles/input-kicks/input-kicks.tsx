import { InputBase } from "@mantine/core"
import { InputKikcsProps } from "./input-kicks-props"
import { useInputKicksStyles } from "./input-kicks-styles"
import { IMaskInput } from 'react-imask';
import { useMaskServices } from "../../../../services/app/mask-services";

export const InputKikcs = ({
    placeholder,
    value,
    label,
    withAsterisk,
    required,
    size,
    error,
    leftSection,
    rightSection,
    typeMask,
    onChange,
}: InputKikcsProps) => {

    const classes = useInputKicksStyles();

    const { switchMask } = useMaskServices();

    return (
        <>
            <InputBase
                className={classes.root}
                label={label}
                withAsterisk={withAsterisk}
                radius='md'
                size={size}
                component={IMaskInput}
                mask={switchMask(typeMask)}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                error={error}
                leftSection={leftSection}
                rightSection={rightSection}
            />
        </>
    )
}