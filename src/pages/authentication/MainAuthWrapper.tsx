import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import backImage from "/assets/images/school.jpg";
import { Outlet } from "react-router-dom";
import { toAbsoluteUrl } from "../../utils/AssetHelpers";

const theme = createTheme();

export default function MainAuthenticationWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${toAbsoluteUrl(
              "/assets/images/artificial.jpg"
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
