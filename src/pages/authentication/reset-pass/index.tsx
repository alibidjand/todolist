import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ResetPassPage() {
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
        <Typography fontWeight="700" component="h4" variant="h4" mb="50px">
          Set New Password
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
          width="100%"
        >
          <Typography mt="25px" component="p" variant="inherit">
            New Password
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
            Submit
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </>
  );
}
