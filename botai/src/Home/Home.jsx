import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Styles from "./Home.module.css";
import SideBar from "../Component/SideBar/SideBar";
import Hero from "../Component/Hero/Hero";
import { createContext } from "react";
export const dataDistributorContext = createContext();

const Home = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [appMode, setAppMode] = useState(
    () => localStorage.getItem("AppMode") || "light"
  );
  const [menubar, setMenubar] = useState(true);
  const [themeMode, setThemeMode] = useState(appMode);
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
      localStorage.setItem("AppMode", Mode);
      return Mode;
    });
  }, []);

  // TODO: Menu Bar sow Hide karan ka laya.............
  const menuHandel = () => {
    setMenubar((prev) => !prev);
  };
  const closeHandler = () => {
    setMenubar((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("AppMode", appMode);
    setAppMode(localStorage.getItem("AppMode"));
  }, [appMode]);

  console.log("toggle", menubar);
  return (
    <dataDistributorContext.Provider value={{ darkModeHandle, themeMode }}>
      <Box component="main" className={Styles.homeMain}>
        <Grid container>
          {!isMobile ? (
            <Grid item md={3} sm={3} className={Styles.sidebarComponent}>
              <SideBar />
            </Grid>
          ) : (
            <Grid
              item
              sm={7}
              xs={12}
              className={menubar ? Styles.mobileNavOpen : Styles.mobileNavClose}
            >
              <SideBar isMobile={isMobile} closeHandler={closeHandler} />
            </Grid>
          )}
          <Grid
            item
            md={9}
            sm={isMobile ? 12 : 9}
            className={isMobile ? Styles.MobieHero : Styles.heroComponent}
          >
            <Hero isMobile={isMobile} menuHandel={menuHandel} />
          </Grid>
        </Grid>
      </Box>
    </dataDistributorContext.Provider>
  );
};

export default Home;
