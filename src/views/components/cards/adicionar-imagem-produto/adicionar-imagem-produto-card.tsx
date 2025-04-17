import { Grid, Image } from "@mantine/core"
import { CardKicks } from "../../controles/card-kicks/card-kicks"
import { useAdicionarImagemProdutoCardStyles } from "./adicionar-imagem-produto-card-styles"
import { PlusIcon } from "../../icons/plus/plus-icon";

export const AdicionarImagemProdutoCard = () => {

    const classes = useAdicionarImagemProdutoCardStyles();

    return (
        <>
            <CardKicks className={classes.root}>
                <Grid style={{ height: '100%' }}>
                    <Grid.Col span={8}>
                        <div className={classes.imagePrimary}>
                            <PlusIcon />
                        </div>
                        {/* <PlusIcon />
                        <Image className={classes.imagePrimary} /> */}
                    </Grid.Col>
                    <Grid.Col span={4} className={classes.containerImages}>
                        <div className={classes.images}>
                            <PlusIcon />
                        </div>
                        <div className={classes.images}>
                            <PlusIcon />
                        </div>
                        <div className={classes.images}>
                            <PlusIcon />
                        </div>
                        {/* <Image className={classes.images} />
                        <Image className={classes.images} />
                        <Image className={classes.images} /> */}
                    </Grid.Col>
                </Grid>
            </CardKicks>
        </>
    )
}