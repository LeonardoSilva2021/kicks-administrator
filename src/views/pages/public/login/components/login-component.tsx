import { Grid } from "@mantine/core"
import { TypographyKikcs } from "../../../../components/controles/typography-kicks/typography-kicks"
import { useLoginComponentStyles } from "./login-component-styles"
import { FormLogin } from "../../../../components/forms/login/form-login";
import { ButtonKicks } from "../../../../components/controles/button-kicks/button-kicks";
import { GoogleIcon } from "../../../../components/icons/google/google-icon";
import { AppleIcon } from "../../../../components/icons/apple/apple-icon";
import { FacebookIcon } from "../../../../components/icons/facebook/facebook-icon";
import { useThemeQueries } from "../../../../Theme/theme-queries";

export const LoginComponent = () => {

    const { isMobile } = useThemeQueries();
    const classes = useLoginComponentStyles({
        isMobile,
    });

    return (
        <>
            <div className={classes.root}>
                <Grid className={classes.container}>
                    <Grid.Col span={12}>
                        <TypographyKikcs
                            variant="h2"
                        >
                            Login
                        </TypographyKikcs>
                        <TypographyKikcs
                            variant="h4"
                            isBold
                            isUnderline
                        >
                            Forgot your password?
                        </TypographyKikcs>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <FormLogin />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Grid>
                            <Grid.Col span={4}>
                                <ButtonKicks
                                    variant="outline"
                                    color="#000"
                                    radius="md"
                                    size="lg"
                                    fullWidth
                                    classnames={classes.buttonLogin}
                                >
                                    <GoogleIcon />
                                </ButtonKicks>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <ButtonKicks
                                    variant="outline"
                                    color="#000"
                                    radius="md"
                                    size="lg"
                                    fullWidth
                                    classnames={classes.buttonLogin}
                                >
                                    <AppleIcon />
                                </ButtonKicks>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <ButtonKicks
                                    variant="outline"
                                    color="#000"
                                    radius="md"
                                    size="lg"
                                    fullWidth
                                    classnames={classes.buttonLogin}
                                >
                                    <FacebookIcon />
                                </ButtonKicks>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <TypographyKikcs
                            variant="h5"
                        >
                            By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.
                        </TypographyKikcs>
                    </Grid.Col>
                </Grid>
            </div>
        </>
    )
}