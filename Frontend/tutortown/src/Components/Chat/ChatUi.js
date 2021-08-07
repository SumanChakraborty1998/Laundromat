import React from "react";
import axios from "axios";
import styles from "./ChatUi.module.css";
import TutorChat from "./TutorChat";


const ChatUi = () => {

  const [tdisplay, setTDisplay] = React.useState(false);



  const handletutor = (e) => {
    e.preventDefault();
    setTDisplay(!tdisplay);

  };


  return (
    <div className={styles.chatui}>
      <button className={styles.chatbtn} onClick={handletutor}>
        Chat to Cutomer Support
      </button>
      

      <TutorChat />
    </div>
  );
};

export default ChatUi;
