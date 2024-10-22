import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "./Hero.module.css";
import DarkMode from "../DarkMode/DarkMode";
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg";
import cardData from "../../SimpleData.json";

const Hero = () => {
  const [inputData, setInputData] = useState("");
  const [userContent, setUserContent] = useState([]);

  const submitHandler = () => {
    const newEntry = {
      id: userContent.length + 1,
      date: new Date(),
      question: inputData,
    };
    const updateContent = [...userContent, newEntry];
    setUserContent(updateContent);
    localStorage.setItem("userQuestion", JSON.stringify(updateContent));
  };

  useEffect(() => {
    const fetchStro = localStorage.getItem("userQuestion");
    if (fetchStro) {
      setUserContent(JSON.parse(fetchStro));
    } else {
      localStorage.setItem("userQuestion", JSON.stringify([]));
    }
  }, []);
  console.log("input", inputData);
  console.log("data", userContent);
  return (
    <Box component="section" className={Styles.heroSection}>
      <Grid container>
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
          {userContent.length > 0
            ? userContent.map((item) => (
                <Grid item md={12} sm={12} xs={12}>
                  <Card className={Styles.responseCard}>
                    <CardMedia>
                      <img src={user} alt="userImg" className={Styles.logo} />
                    </CardMedia>
                    <CardContent>
                      <Typography component="h2" className={Styles.user}>
                        You
                      </Typography>
                      <Typography
                        component="p"
                        className={Styles.questionRespnse}
                      >
                        {item.question}
                      </Typography>
                      <Typography component="p" className={Styles.date}>
                        {new Date(item.date).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : cardData
                .filter((item) => item.id < 5)
                .map((item) => (
                  <Grid item md={6} sm={12} xs={12} key={item.id}>
                    <Card className={Styles.card}>
                      <CardContent>
                        <Typography component="h2" className={Styles.question}>
                          {item.question}
                        </Typography>
                        <Typography component="p" className={Styles.answer}>
                          {item.response.length > 100
                            ? item.response.slice(0, 100) + " read more...."
                            : item.response}
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
            <input
              id="question"
              name="question"
              className={Styles.input}
              onChange={(e) => setInputData(e.target.value)}
            />
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
            <Button className={Styles.button} onClick={submitHandler}>
              Ask
            </Button>
            <Button className={Styles.button}>Save</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
