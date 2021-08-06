import React, { useState } from "react";
import styles from "./SignUpCont.module.css";


function SignUpCont() {
    const [tutor, setTutor] = useState(false);
    const [student, setStudent] = useState(false);

    const handleSetTutor = () => {
        setTutor(true);
    }

    const handleSetStudent = () => {
        setStudent(true);
    }


    return (
        <div className={styles.sign_up_cont}>
            {tutor === false && student === false ? <div className={styles.select_role}>
                <div className={styles.select_role_heading}>
                    Select Your Role
                </div>
                <div className={styles.role_button} onClick={handleSetTutor}>STUDENT</div>
                <div className={styles.role_button} onClick={handleSetStudent}>TUTOR</div>
            </div> : "" }
        </div>
    )
}

export default SignUpCont;