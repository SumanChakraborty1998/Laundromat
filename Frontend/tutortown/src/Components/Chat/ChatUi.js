import React from "react";
import axios from "axios";
import styles from "./ChatUi.module.css";
import TutorChat from "./TutorChat";
import StudentChat from "./StudentChat";

const ChatUi = () => {
  const [tutorName, setTutorname] = React.useState("");
  const [studentName, setStudentName] = React.useState("");
  const tutorChat = "tutorroom";
  const studentChat = "studentroom";
  const [tdisplay, setTDisplay] = React.useState(false);
  const [sdisplay, setSDisplay] = React.useState(true);

  React.useEffect(() => {
    axios.get("http://localhost:3001/tutors").then((res) => {
      const data = res.data.data;
      const namet = data[0].name;
      setTutorname(namet);
    });

    axios.get("http://localhost:3001/students").then((res) => {
      const data = res.data.data;
      const names = data[0].name;
      setStudentName(names);
    });
  }, []);

  const handletutor = (e) => {
    e.preventDefault();
    setTDisplay(!tdisplay);
    setSDisplay(!sdisplay);
  };

  const handlestudent = (e) => {
    e.preventDefault();
    setSDisplay(!sdisplay);
    setTDisplay(!tdisplay);
  };
  return (
    <div className={styles.chatui}>
      <button className={styles.chatbtn} onClick={handletutor}>Chat as Tutor</button>
      <button className={styles.chatbtn} onClick={handlestudent}>Chat as Student</button>

      {tdisplay && <TutorChat tutorName={tutorName} tutorChat={tutorChat} />}
      {sdisplay && (
        <StudentChat studentName={studentName} studentChat={studentChat} />
      )}
    </div>
  );
};

export default ChatUi;
