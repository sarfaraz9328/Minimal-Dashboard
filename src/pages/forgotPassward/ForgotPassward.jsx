import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { Grid, Stack, Typography, TextField, Button } from "@mui/material";
import "./ForgotPassward.css";
import lock from "../../images/3d-lock.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ForgotPassward = () => {

  document.title = "Dashbiard | ForgotPassward";

  const Navigate = useNavigate();
  const title = () => {
    const path = "login";
    Navigate(path, {state: {type: "login"}});
    document.title = 'Dashboard | Login';
  }

  return (
    <>
      <Grid container className="forgot">
        <Grid item md={12}>
          <Stack justifyContent="center" alignItems="center">
            <img src={lock} alt="lock" className="lock" />
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={3}
              textAlign="center"
            >
              Forgot your password?
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              mt={2}
              mb={3}
              className="body2"
            >
              Please enter the email address associated with your account and We
              will email you a link to reset your password.
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              size="normal"
              className="forgot-email"
            />
            <Stack mt={2}>
              <Button variant="contained" className="send-btn">
                send request
              </Button>
            </Stack>
            <Stack
              direction="row"
              mt={2}
              justifyContent="center"
              alignItems="center"
            >
              <ArrowBackIosIcon fontSize="small"/>
              <NavLink className="return-btn" onClick={title}>
                Return to sign in
              </NavLink>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassward;
