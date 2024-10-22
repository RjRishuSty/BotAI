import React, { useCallback, useState } from "react";
import { Box, Grid } from "@mui/material";
import Styles from "./Home.module.css";
import SideBar from "../Component/SideBar/SideBar";
import Hero from "../Component/Hero/Hero";
import { createContext } from "react";
export const dataDistributorContext = createContext();
const Home = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkModeHandle = useCallback(() => {
    setThemeMode((prevMode) => {
      const Mode = prevMode === "light" ? "dark" : "light";

      if (Mode === "light") {
        document.documentElement.style.setProperty(
          "--primary-color",
          "#ffffff"
        );
        document.documentElement.style.setProperty(
          "--secondary-color",
          "#d7c7f4"
        );
        document.documentElement.style.setProperty(
          "--background",
          "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"
        );
        document.documentElement.style.setProperty("--text-primary", "#3C3C3C");
        document.documentElement.style.setProperty(
          "--text-secondary",
          "#9785BA"
        );
      } else {
        document.documentElement.style.setProperty(
          "--primary-color",
          "#9785BA"
        );
        document.documentElement.style.setProperty(
          "--secondary-color",
          "black"
        );
        document.documentElement.style.setProperty("--background", "#3C3C3C");
        document.documentElement.style.setProperty("--text-secondary", "white");
        document.documentElement.style.setProperty("--text-primary", "white");
      }

      return Mode;
    });
  }, []);
  return (
    <dataDistributorContext.Provider value={{ darkModeHandle, themeMode }}>
      <Box component="main" className={Styles.homeMain}>
        <Grid container>
          <Grid item md="3" sm={2}>
            <SideBar />
          </Grid>
          <Grid item md="9" sm={10}>
            <Hero />
          </Grid>
        </Grid>
      </Box>
    </dataDistributorContext.Provider>
  );
};

export default Home;
