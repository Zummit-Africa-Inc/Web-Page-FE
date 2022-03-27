import React, { useState } from "react";
import Logo from "../Images/LOGO (1).png";
import Btx from "../Component/ButtonComponent";
import DrawerComponent from "../Component/DrawerComponent";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const PAGES = ["About", "Services", "Contact"];
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ backgroundColor: "#081F42" }}>
          <img className="navbar_image" src={Logo} alt="Logo" />
          {isMatch ? (
            <Box sx={{ marginLeft: "auto" }}>
              {" "}
              <DrawerComponent />{" "}
            </Box>
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="white"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="primary"
            >
              {PAGES.map((page, index) => 
              (
                <Tab
                  key={index}
                  sx={{ textTransform: "capitalize", marginLeft: "50px" }}
                  label={page}
                ></Tab>
              )
              )}
              <Btx spacing={{ marginLeft: "130px" }} variant="outlined">
                <span style={{ color: "white", textTransform: "capitalize" }}>
                  Request a demo
                </span>
              </Btx>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
