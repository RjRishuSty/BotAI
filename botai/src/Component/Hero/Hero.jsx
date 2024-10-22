import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import Styles from "./Hero.module.css";
import DarkMode from "../DarkMode/DarkMode";
import logo from "../../assets/logo.png";
import cardData from "../../SimpleData.json";

const Hero = () => {
  return (
    <Box component="section" className={Styles.heroSection}>
      <Grid container sx={{border:'2px solid red'}}>
        <Grid item md={6} sm={6} xs={6}>
          <Typography className={Styles.brandName}>Bot AI</Typography>
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={6}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <DarkMode />
        </Grid>
      </Grid>
      <Container className={Styles.WelcomeContainer}>
        <Typography className={Styles.heading}>
          How Can I Help You Today?
        </Typography>
        <img src={logo} alt="BotAI" className={Styles.logo} />
      </Container>

      {/* Card BOX */}
      <Box component="div" mb={5} className={Styles.cardBox}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {cardData
            .filter((item) => item.id < 5)
            .map((item) => (
              <Grid item md={6} sm={12} xs={12} key={item.id}>
                <Card className={Styles.card}>
                  <CardContent>
                    <Typography component="h2" className={Styles.question}>
                      {item.question}
                    </Typography>
                    <Typography component="p" className={Styles.answer}>
                      {item.response.length >100 ? item.response.slice(0,100)+ ' more....':item.response}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
      {/* Input Box */}
      <Box component="div" className={Styles.inputBox}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={9}
            sm={7}
            xs={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <input id="question" name="question" className={Styles.input} />
          </Grid>
          <Grid
            item
            md={3}
            sm={5}
            xs={5}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Button className={Styles.button}>Ask</Button>
            <Button className={Styles.button}>Save</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
