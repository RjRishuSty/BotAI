import { Card, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Styles from "./Feedback.module.css";
import feedbackIcon from "../../assets/feedback.svg";

const Feedback = () => {
  return (
    <Box component="div" className={Styles.modelBox}>
      <Card className={Styles.card}>
        <div className={Styles.cardHeader}>
          <div className={Styles.imgText}>
            <img src={feedbackIcon} alt="feedback" className={Styles.img} />
            <Typography component="p" mt={3} px={1} className={Styles.heading}>
              Provide Additional Feedback
            </Typography>
          </div>
          <CloseIcon className={Styles.closeIcon} />
        </div>
        <Box component="form" className={Styles.form}>
          <textarea rows="9" className={Styles.textarea}></textarea>
          <Button mt={3} className={Styles.button}>
            Submit
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Feedback;
