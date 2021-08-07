import React from "react";
import styles from "./ChatUi.module.css";
import io from "socket.io-client";
import send from '../Images/send.png';

let socket;

const TutorChat = ({ tutorName, tutorChat }) => {
  const [message, setMessage] = React.useState([]);
  const [messages, setMessages] = React.useState([]);

  const ENDPOINT = "http://localhost:3001";

  React.useEffect(() => {
    socket = io(ENDPOINT);

    console.log(tutorName, tutorChat);
    socket.emit("join", { tutorName, tutorChat });

    // return () => {
    //   socket.emit("disconnect");
    //   socket.off();
    // };
  }, [ENDPOINT, tutorName]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendmessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);
  return (
    <div className={styles.chat}>
      {/* <h5>welcome, {tutorName}</h5> {tutorChat} */}
      <input
        className={styles.chatinp}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
     <div className={styles.sendbtn}>Send</div>
    </div>
  );
};

export default TutorChat;
