import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import newChat from "../../assets/chatIcon.svg";

const SideBar = ({closeHandler,isMobile}) => {
  return (
    <Box component="section" className={Styles.sidebar}>
      <Grid container>
        <Grid
          item
          sm={12}
          sx={12}
          className={Styles.closeIcon}
        >
          {
            isMobile ? <CloseIcon onClick={closeHandler}/> :''
          }
          
        </Grid>
        <Grid item md={12} className={Styles.sidebarItem}>
          <img src={logo} alt="BotAI" className={Styles.logo} />
          <Typography className={Styles.newChat}>New Chat</Typography>
          <img src={newChat} alt="chatIcon" className={Styles.chatIcon} />
        </Grid>
        <Grid
          item
          md={12}
          mt={3}
          mb={2}
          className={Styles.buttonBox}
        >
          <Button varient="contained" className={Styles.button}>
            Past Conversations
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideBar;
