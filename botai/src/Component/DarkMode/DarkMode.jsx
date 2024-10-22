import React, { useContext } from "react";
import Styles from "./DarkMode.module.css";
import { Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { dataDistributorContext } from "../../Home/Home";

const DarkMode = () => {
  const { darkModeHandle, themeMode } = useContext(dataDistributorContext);

  return (
    <Box component="div" className={Styles.darkMode}>
      {themeMode === "light" ? (
        <LightModeIcon onClick={darkModeHandle} className={Styles.icon} />
      ) : (
        <DarkModeIcon onClick={darkModeHandle} className={Styles.icon} />
      )}
    </Box>
  );
};

export default DarkMode;
