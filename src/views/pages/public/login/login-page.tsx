import { Grid, Image } from "@mantine/core";
import TenisFundo from '../../../../assets/Air-force-1.png';
import LogoBranco from '../../../../assets/Logo branco.png';
import LogoPreto from '../../../../assets/Logo.png';
import { useLoginPageStyles } from "./login-page-styles";
import { LoginComponent } from "./components/login-component";
import { useThemeQueries } from "../../../Theme/theme-queries";

export const LoginPage = () => {

  //AUX
  const classes = useLoginPageStyles();
  const { isMobile } = useThemeQueries();

  return (
    <>
      {isMobile ? (
        <Grid className={classes.root}>
          <Grid.Col span={12} className={classes.containerMobile}>
            <div className={classes.containerLogoMobile}>
              <Image src={LogoPreto} fit="cover" />
            </div>
            <LoginComponent />
          </Grid.Col>
        </Grid>
      ) : (
        <Grid className={classes.root}>
          <Grid.Col span={6} className={classes.imagemContainer}>
            <div className={classes.logo}>
              <Image src={LogoBranco} alt="cover" />
              <Image src={TenisFundo} alt="contain" />
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <LoginComponent />
          </Grid.Col>
        </Grid >
      )}
    </>
  )
}