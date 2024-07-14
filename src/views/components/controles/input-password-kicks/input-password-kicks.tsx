import { PasswordInput } from "@mantine/core"
import { InputPasswordKicksProps } from "./input-password-kicks-props"
import { useInputPasswordKicksStyles } from "./input-password-kicks-styles"

export const InputPasswordKicks = ({
    size,
    value,
    error,
    required,
    placeholder,
    onChange,
}: InputPasswordKicksProps) => {

    const classes = useInputPasswordKicksStyles();

    return (
        <>
            <PasswordInput 
                size={size}
                radius='md'
                value={value}
                error={error}
                required={required}
                className={classes.root}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}