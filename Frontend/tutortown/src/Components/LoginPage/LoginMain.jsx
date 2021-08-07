import React from "react";
import LoginCont from "./LoginCont";
import styles from "./LoginMain.module.css";

function LoginMain() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.Login_header}>LOGIN</div>
            <LoginCont />
            <br />
            <br />
        </div>
    );
}

export default LoginMain;