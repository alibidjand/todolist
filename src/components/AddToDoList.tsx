import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../state/redux/hooks/hooks";
import { setToDo } from "../state/redux/slice/authSlice";

export default function AddToDolist() {
  const dispatch = useAppDispatch();

  const validationSchema = yup.object({
    addToDo: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(14, "Password must be less than 14 characters"),
  });

  return (
    <Formik
      initialValues={{ addToDo: "" }}
      onSubmit={(values) => {
        console.log("values", values);
        dispatch(setToDo(values.addToDo));
        values.addToDo = "";
      }}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Stack
              sx={{
                maxHeight: 500,
              }}
              direction="column"
              spacing={2}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Add your ToDo work"
                  color="secondary"
                  id="addToDo"
                  name="addToDo"
                  autoComplete="addToDo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addToDo}
                  error={touched.addToDo && Boolean(errors.addToDo)}
                  helperText={touched.addToDo && errors.addToDo}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  focused
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<SendIcon />}
              >
                ADD
              </Button>
            </Stack>
          </Box>
        );
      }}
    </Formik>
  );
}
