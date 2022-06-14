import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "@mui/material";

export default function ForgetPassPage() {
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
    <>
      <Typography
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
        textAlign="right"
        fontWeight="500"
        component="p"
        m="40px"
      >
        <ArrowBackIosIcon />
        <Link
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            textDecoration: "none",
          }}
          href="login"
        >
          Back to login
        </Link>
      </Typography>

      <Box
        sx={{
          my: 8,
          mx: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography fontWeight="700" component="h4" variant="h4" mb="10px">
          Forget Password
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{}}
          width="100%"
        >
          <Typography component="p" my="40px" variant="inherit">
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </Typography>
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
              textTransform: "initial !important",
            }}
            size="large"
          >
            <Typography component="p" variant="subtitle1">
              Get Link Via Email
            </Typography>
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </>
  );
}
