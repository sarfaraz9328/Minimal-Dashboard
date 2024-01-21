import React from "react";
import { Typography, Grid, Button, TextField, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import LeftImage from "../left-imgae/LeftImage";
import MenuAppBar from "../navbar/MenuAppBar";

const Register = () => {

  document.title = "Dashboard | Register";

  const Navigate = useNavigate();
  const title = () => {
    const path = "login";
    Navigate(path, { state: { type: "login" } });
    document.title = "Dashboard | Login";
  };

  const registerTitle = "Manage the job more effectively with Minimal";

  return (
    <>
      
      <Grid container>
        <Grid item md={8} className="left-side">
          <LeftImage title={registerTitle} />
        </Grid>

        <Grid item md={4} xs={12} className="right-side">
        <MenuAppBar />
          <Typography variant="h5" fontWeight="bold">
            Get started absolutely free
          </Typography>
          <Typography variant="subtitle1" mt={3}>
            Already have an account?
            <Link className="signin-btn" onClick={title}>
              Sign in
            </Link>
          </Typography>

          <Stack spacing={2} mt={4}>
            <Stack direction="row" spacing={1}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Stack>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
            />
          </Stack>
          <Stack mt={2}>
            <Button variant="contained" className="login-btn">
              Create account
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
