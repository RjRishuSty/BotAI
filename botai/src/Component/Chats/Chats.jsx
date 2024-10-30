import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import user from "../../assets/user.svg";
import AI from "../../assets/logo.png";
import Styles from "./Chats.module.css";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

const Chats = ({ chats }) => {
  const chatBoxRef = useRef();

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chats]);
  return (
    <div className={Styles.box} ref={chatBoxRef}>
      {chats.map((item, index) => (
        <Card key={index} className={Styles.card}>
          <CardMedia>
            {item.type === "Human" ? (
              <img src={user} alt="user" className={Styles.userImg} />
            ) : (
              <img src={AI} alt="user" className={Styles.userImg} />
            )}
          </CardMedia>
          <CardContent>
            <Typography component="h2" className={Styles.user}>
              {item.type === "Human" ? " You" : "Soul AI"}
            </Typography>
            <Typography component="p" className={Styles.questionRespnse}>
              {item.type === "Human" ? item.question : item.response}
            </Typography>
            <div className={Styles.timeOrLink}>
              {item.type === "Human" ? (
                <Typography component="p" className={Styles.date}>
                  {new Date(item.date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </Typography>
              ) : (
                <>
                  <Typography component="p" className={Styles.date}>
                    {new Date(item.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </Typography>
                  <div className={Styles.likeBox}>
                    <Button>
                      <ThumbUp className={Styles.icon} />
                    </Button>
                    <Button>
                      <ThumbDown className={Styles.icon} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Chats;
