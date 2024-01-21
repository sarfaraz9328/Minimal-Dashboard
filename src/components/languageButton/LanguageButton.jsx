import { useEffect, useState } from "react";
import Translation from "../../translationToLanguage/language.json";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";

const LanguageButton = () => {
  // const [language, setLanguage] = useState(english);
  // const [content, setContent] = useState({});

  // useEffect(() => {
  //   if (language == "english") {
  //     setContent(Translation.english);
  //   } else if (language == "telegu") {
  //     setContent(Translation.telugu);
  //   }
  // });

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
      <div>
        <Dropdown>
          <MenuButton>
            <LanguageIcon />
          </MenuButton>
          <Menu>
            <MenuItem onClick={createHandleMenuClick("Profile")}>
              Profile
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Language settings")}>
              Language settings
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Log out")}>
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default LanguageButton;
