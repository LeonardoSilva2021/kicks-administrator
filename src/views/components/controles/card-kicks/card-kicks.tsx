import { Card } from "@mantine/core"

interface CardKicksProps {
    children?: any;
}

export const CardKicks = ({
    children,
}: CardKicksProps) => {
    return (
        <>
            <Card
                style={{
                    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.4)',
                    padding: '8px',
                    borderRadius: '20px',
                    display: 'flex'
                }}
            >
                {children}
            </Card>
        </>
    )
}