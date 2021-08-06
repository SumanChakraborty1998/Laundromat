import React from "react";
import styles from "./ChatUi.module.css";
import io from "socket.io-client";

let socket;

const TutorChat = ({ tutorName, tutorChat }) => {
  //   const [name, setname] = React.useState("");
  //   const [room, setroom] = React.useState("");
  const ENDPOINT = "http://localhost:3001";

  React.useEffect(() => {
    socket = io(ENDPOINT);
    // setname(tutorName);
    //setroom(tutorChat);
    console.log(tutorName, tutorChat);
    socket.emit("join", { tutorName, tutorChat });
    //console.log(socket);
  }, [ENDPOINT, tutorName]);
  return (
    <div className={styles.chat}>
      {tutorName} {tutorChat}
    </div>
  );
};

export default TutorChat;
