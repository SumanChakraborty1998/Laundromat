import React from "react";
import SignUpCont from "./SignUpCont";
import styles from "./SignUpMain.module.css"

function SignUpMain() {
    return (
        <div>
            <div className={styles.sign_up_header}>
                REGISTER
            </div>
            <SignUpCont />
        </div>
        
    );
}

export default SignUpMain;