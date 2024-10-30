import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkMode from "../DarkMode/DarkMode";
import Styles from "./HeroHeader.module.css";

const HeroHeader = ({ isMobile, menuHandel }) => {
  return (
    <Grid container>
      <Grid
        item
        md={12}
        sm={12}
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {isMobile ? <MenuIcon onClick={menuHandel} /> : ""}
          <Typography className={Styles.brandName}>Bot AI</Typography>
        </Box>

        <DarkMode />
      </Grid>
    </Grid>
  );
};

export default HeroHeader;
