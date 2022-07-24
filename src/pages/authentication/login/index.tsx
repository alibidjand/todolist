import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../../hook/useAuth";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const { login } = useAuth();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 6 characters")
      .max(16, "Password must be less than 20 characters")
      .required("Password is required"),
  });

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
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        login({
          email: values.email,
          password: values.password,
        });
      }}
      // validateOnBlur={false}
      // validateOnChange={false}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
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
            <Typography component="p" variant="inherit" mb="20px">
              It's working with every email and password
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputLabelProps={{
                  shrink: true,
                }}
                // autoFocus={false}
                // autoFocus
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
                id="password"
                name="password"
                autoComplete="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputLabelProps={{
                  shrink: true,
                }}
                // autoFocus={true}
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
                    "linear-gradient(268.51deg, rgb(255 127 110) 3.52%, rgb(70 10 0) 116.72%)",
                  textTransform: "initial !important",
                }}
                size="large"
                // onClick={formik.handleSubmit}
              >
                Login
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
