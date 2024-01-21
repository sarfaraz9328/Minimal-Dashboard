import React, { useEffect } from "react";
import { Typography, Grid, Button, TextField, Stack } from "@mui/material";
import LeftImage from "../left-imgae/LeftImage";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import MenuAppBar from "../navbar/MenuAppBar";

const Login = () => {
  const Navigate = useNavigate();

  const title = () => {
    const path = "register";
    Navigate(path, { state: { type: "register" } });
    
  };

  const forgotTitle = () => {
    const path = "forgot-password";
    Navigate(path, { state: { type: "forgot-password" } });
    // document.title = "Dashboard | Forgot Password";
    document.text = "Manage the job more effectively with Minimal";
  };
  document.title = "Dashboard | login";


  const Title = "Hi, Welcome Back";

  return (
    <>
      <Grid container>
        <Grid item md={8} className="left-side">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            {Title}
          </Typography>

          <LeftImage />
        </Grid>

        <Grid item md={4} xs={12} className="right-side">
          <MenuAppBar />
          <Typography variant="h5" fontWeight="bold">
            Sign in to Minimal
          </Typography>
          <Typography variant="subtitle1" mt={3}>
            New User?
            <Link type="button" className="create-btn" onClick={title}>
              Create an account
            </Link>
          </Typography>
          <Stack spacing={2} mt={4} className="login-input">
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
            />
          </Stack>
          <Stack mt={1} mb={1}>
            <Link className="forgot-btn" onClick={forgotTitle}>
              Forgot password?
            </Link>
          </Stack>
          <Stack>
            <Button variant="contained" className="login-btn">
              Login
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
