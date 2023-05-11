import React from "react";
import {
  Container,
  Typography,
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Copyright from "../core/Copyright";
import BackendError from "../core/BackendError";

const LoginForm = ({error=null,handleClickLogin=()=>null}) =>{
    const [isVisibble, setVisibble] = React.useState(false);
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        isSubmitting,
      } = useFormik({
        enableReinitialize:true,
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email!")
            .required("required!"),
          password: Yup.string()
            .matches(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/,
              "Password must be 8 to 50 characters length and should have one number and special character"
            )
            .required("required!"),
        }),
        onSubmit: handleClickLogin,
      });

    return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            disabled={isSubmitting}
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            margin="normal"
            label="Email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            variant="outlined"
          />
          <TextField
            disabled={isSubmitting}
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            margin="normal"
            label="Password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            variant="outlined"
            type={isVisibble ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setVisibble((state) => !state)}
                    edge="end"
                  >
                    {isVisibble ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <BackendError errorMsg={error}/>
          <Button
          disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
          <Box display='flex' justifyContent='center'>
              <Link href="/register" variant="body2" textAlign='center'>
                {"Don't have an account? Register"}
              </Link>
            
          </Box>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>)
}

export default LoginForm;