import { Grid, Pagination } from "@mantine/core"
import { usePaginationKicksStyles } from "./pagination-kicks-styles"

interface PaginationKicksProps {
    index: number;
    totalPges: number; 
}

export const PaginationKicks = ({
    index,
    totalPges
}: PaginationKicksProps) => {

    const classes = usePaginationKicksStyles();

    return (
        <>

            <Grid className={classes.root}>
                <Grid.Col span={12} className={classes.paginationContainer}>
                    <Pagination
                        total={totalPges}
                        value={index}
                    />
                </Grid.Col>
            </Grid>
        </>
    )
}