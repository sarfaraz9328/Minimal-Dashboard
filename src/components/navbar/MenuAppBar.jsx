import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LanguageButton from "../languageButton/LanguageButton";



export default function MenuAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent"  sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <LanguageButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
