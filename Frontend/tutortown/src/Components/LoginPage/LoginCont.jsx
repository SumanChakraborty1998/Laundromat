import React, { useState } from "react";
import styles from "./LoginCont.module.css";
import {Link} from "react-router-dom"

function LoginCont() {
    const [tutor, setTutor] = useState(false);
    const [student, setStudent] = useState(false);
 

    const handleSetTutor = () => {
        setTutor(true);
    };

    const handleSetStudent = () => {
        setStudent(true);
    };

    return (
        <div className={styles.login_cont}>
            {tutor === false && student === false ? 
                <div className={styles.select_role}>
                    <div className={styles.select_role_heading}>
                        Select Your Role
                    </div>
                    <div
                        className={styles.role_button}
                        onClick={handleSetStudent}
                    >
                        STUDENT
                    </div>
                    <div
                        className={styles.role_button}
                        onClick={handleSetTutor}
                    >
                        TUTOR
                    </div>
                </div>
            : tutor === true ? <div className={styles.tutor_main_Cont}>
                <div className={styles.left}>
                    <div className={styles.greeting}>Hello, Tutor!</div>
                    <div className={styles.sub_line}>Enter your personal details</div>
                    <div className={styles.sub_line}>and start journey with us.</div>
                    <Link to="/signup" className={styles.link}> 
                        <div className={styles.button}>Sign up</div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.right_sub_cont}>
                        <div className={styles.heading}>Tutor Login</div>
                        <div className={styles.lable}>Email</div>
                        <input type="email" placeholder="xyz@email.com" className={styles.input}/>
                        <div className={styles.lable}>Password</div>
                        <input type="password" placeholder="******" className={styles.input}/>
                        <br />
                        <button type="submit" className={styles.login_button}>Login</button>
                    </form>
                    
                </div>
            </div> : <div className={styles.tutor_main_Cont}>
                <div className={styles.left}>
                    <div className={styles.greeting}>Hello, Student!</div>
                    <div className={styles.sub_line}>Enter your personal details</div>
                    <div className={styles.sub_line}>and start journey with us.</div>
                    <Link to="/signup" className={styles.link}> 
                        <div className={styles.button}>Sign up</div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.right_sub_cont}>
                        <div className={styles.heading}>Student Login</div>
                        <div className={styles.lable}>Email</div>
                        <input type="email" placeholder="xyz@email.com" className={styles.input}/>
                        <div className={styles.lable}>Password</div>
                        <input type="password" placeholder="******" className={styles.input}/>
                        <br />
                        <button type="submit" className={styles.login_button}>Login</button>
                    </form>
                    
                </div>
            </div>
                
            }
        </div>
    );
}

export default LoginCont;
