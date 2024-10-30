import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Styles from "./Welcome.module.css";
import logo from "../../assets/logo.png";

const Welcome = () => {
  return (
    <Box component="div" className={Styles.welcomeBox}>
      <Typography className={Styles.heading}>
        How Can I Help You Today?
      </Typography>
      <img src={logo} alt="BotAI" className={Styles.logo} />
    </Box>
  );
};

export default Welcome; 
