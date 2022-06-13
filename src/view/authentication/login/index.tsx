import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backImage from "../../../assets/images/school.jpg";

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 1,
      borderRadius: 10,
    },
    "& input:invalid + fieldset": {
      borderColor: "rgb(137 117 219)",
      borderWidth: 1,
      borderRadius: 10,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
      borderRadius: 10,
    },
  });

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
            backgroundImage: `url(${backImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography fontWeight="700" component="h4" variant="h4" mb="50px">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              width="100%"
            >
              <Typography component="p" variant="inherit">
                Email
              </Typography>
              <ValidationTextField
                margin="dense"
                label="Type Here"
                required
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Typography mt="25px" component="p" variant="inherit">
                Password
              </Typography>
              <ValidationTextField
                margin="dense"
                label="Type Here"
                required
                variant="outlined"
                fullWidth
                id="email"
                name="password"
                autoComplete="current-password"
                autoFocus
              />

              <Grid item textAlign="right" xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: "10px",
                  background:
                    "linear-gradient(268.51deg, rgba(179, 17, 255, 0.7) 3.52%, rgba(0, 149, 214, 0.7) 116.72%)",
                }}
                size="large"
              >
                Login
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
