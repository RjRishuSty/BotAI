import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import newChat from '../../assets/chatIcon.svg';

const SideBar = () => {
  return (
    <Box component="section" className={Styles.sidebar}>
      <Grid container>
        <Grid item md={12} className={Styles.sidebarItem}>
          <img src={logo} alt="BotAI" className={Styles.logo} />
          <Typography className={Styles.newChat}>New Chat</Typography>
          <img src={newChat} alt="chatIcon" className={Styles.chatIcon}/>
        </Grid>
        <Grid item md={12} mt={3} mb={2}  display="flex" justifyContent="center" alignItems="center">
          <Button varient="contained" className={Styles.button}>Past Conversations</Button>
        </Grid>
      </Grid>
    </Box> 
  ); 
};

export default SideBar;
