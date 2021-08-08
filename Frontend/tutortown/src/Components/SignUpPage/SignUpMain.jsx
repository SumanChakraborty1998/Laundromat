import React from "react";
import SignUpCont from "./SignUpCont";
import styles from "./SignUpMain.module.css";

function SignUpMain() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.sign_up_header}>REGISTER</div>
            <SignUpCont />
            <br />
            <br />
        </div>
    );
}

export default SignUpMain;
