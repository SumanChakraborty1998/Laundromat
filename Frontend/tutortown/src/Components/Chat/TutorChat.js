import React from "react";
import styles from "./ChatUi";
import io from "socket.io-client";

let socket;

const TutorChat = ({ tutorName, tutorChat }) => {
  const [name, setname] = React.useState("");
  const [room, setroom] = React.useState("");
  const ENDPOINT = "http://localhost:3001";

  React.useEffect(() => {
    socket = io(ENDPOINT);
    setname(tutorName);
    setroom(tutorChat);

    console.log(socket);
  }, [ENDPOINT]);
  return (
    <div className={styles.chat}>
      {tutorName} {tutorChat}
    </div>
  );
};

export default TutorChat;
