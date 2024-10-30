import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Styles from "./DefaultChat.module.css";

const DefaultChat = () => {
  const defaultChatData = [
    {
      heading: "Hi, what is the weather",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Get immediate AI generated response", 
    },
  ];
  return ( 
    <Box component="div" mb={5} className={Styles.cardBox}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {defaultChatData.map((chat,index) => (
          <Grid item md={6} sm={12} xs={12} key={index}>
            <Card className={Styles.card} key={index}>
              <CardContent>
                <Typography className={Styles.question}>{chat.heading}</Typography>
                <Typography className={Styles.answer}>{chat.subtext}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DefaultChat;
