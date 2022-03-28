import React, { Fragment, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./ButtonComponent"

const PAGES = ["About", "Services", "Contact"];

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = createTheme({
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0,0,0,0)",
          },
        },
      },
    }
  })
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
      <Drawer 
        PaperProps={{
          sx: {
            backgroundColor:"#081F4A",
            width: "100%",
            height: "60vh",
            marginTop: "60px",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            
          },
        }}
        
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon sx={{paddingBottom : 2 , paddingTop : 3}}>
                <ListItemText
                 disableTypography
                  primary={
                    <Typography type="body2" style={{ color: '#FFFFFF' }}>{page}</Typography>}
                 
                >
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          </List>
           <Button spacing={{ marginRight: "40px",  marginLeft: "40px"}} variant="outlined">Request a Demo</Button>
        </Drawer>
        </ThemeProvider>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};

export default DrawerComponent;
