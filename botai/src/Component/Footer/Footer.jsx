import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Styles from "./Footer.module.css";

const Footer = ({setInputChat , submitHandler,footerInputRef}) => {

  return (
    <Box component="form" className={Styles.footerBox} onSubmit={submitHandler}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          md={9}
          sm={8}
          xs={7}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <input
            id="question"
            name="question"
            className={Styles.input}
            onChange={(e) => setInputChat(e.target.value.toLocaleLowerCase())}
            ref={footerInputRef}
          />
        </Grid>
        <Grid
          item
          md={3}
          sm={4}
          xs={5}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button type="submit" className={Styles.button}>
            Ask
          </Button>
          <Button className={Styles.button}>Save</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
