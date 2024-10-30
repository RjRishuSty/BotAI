import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import cardData from "../../SimpleData.json";
import Footer from "../Footer/Footer";
import DefaultChat from "../DefaultChat/DefaultChat";
import HeroHeader from "../HeroHeader/HeroHeader";
import Welcome from "../Welcome/Welcome";
import Styles from "./Hero.module.css";
import Chats from "../Chats/Chats";

const Hero = ({ isMobile, menuHandel }) => {
  const [inputChat, setInputChat] = useState("");
  const [chats, setChats] = useState([]);
  const footerInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const matchedItem = cardData.find(
      (item) => item.question.toLowerCase() === inputChat.toLowerCase()
    );

    const response = matchedItem
      ? matchedItem.response
      : "Sorry, I didn't understand that.";

    const userEntry = {
      id: chats.length + 1,
      type: "Human",
      date: new Date(),
      question: inputChat,
    };

    const aiEntry = {
      id: chats.length + 2,
      type: "AI",
      date: new Date(),
      response: response,
      userEntryId: chats.length + 1,
    };

    const updateContent = [...chats, userEntry, aiEntry];
    setChats(updateContent);
    localStorage.setItem("userQuestion", JSON.stringify(updateContent));
    if(footerInputRef.current){
      footerInputRef.current.value = "";
    }
  };

  useEffect(() => {
    const fetchStorage = localStorage.getItem("userQuestion");
    if (fetchStorage) {
      setChats(JSON.parse(fetchStorage));
    } else {
      localStorage.setItem("userQuestion", JSON.stringify([]));
    }
  }, []);
  console.log("AllChats", chats);
  return (
    <>
      <HeroHeader isMobile={isMobile} menuHandel={menuHandel} />
      <Box maxWidth="lg" className={Styles.heroContainer}>
        {chats.length > 0 ? (
          <Chats chats={chats} />
        ) : (
          <>
            <Welcome />
            <DefaultChat />
          </>
        )}
      </Box>
      <Footer setInputChat={setInputChat} submitHandler={submitHandler} footerInputRef={footerInputRef}/>
    </>
  );
};

export default Hero;
