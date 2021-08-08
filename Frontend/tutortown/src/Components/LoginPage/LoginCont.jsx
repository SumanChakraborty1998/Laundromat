import React, { useState } from "react";
import styles from "./LoginCont.module.css";
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {studentLogin, tutorLogin} from "../../Redux/Login/action"

function LoginCont() {
    const [tutor, setTutor] = useState(false);
    const [student, setStudent] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    

    const studentInitialData = {
        email:"",
        password:""
    }

    const [studentCredentials, setStudentCredentials] = useState(studentInitialData);


    const handleStudentCredentials = (e) => {
        const {name, value} = e.target;

        setStudentCredentials({...studentCredentials, [name]: value})
    }


    const tutorInitialData = {
        email:"",
        password:""
    }

    const [tutorCredentials, setTutorCredentials] = useState(tutorInitialData);


    const handleTutorCredentials = (e) => {
        const {name, value} = e.target;

        setTutorCredentials({...tutorCredentials, [name]: value})
    }

    const handleSetTutor = () => {
        setTutor(true);
    };

    const handleSetStudent = () => {
        setStudent(true);
    };


    const handleStudentLogin = (e) => {
        e.preventDefault();
        dispatch(studentLogin(studentCredentials));
        history.push("/student/dashboard");
    }

    const handleTutorLogin = (e) => {
        e.preventDefault();
        dispatch(tutorLogin(tutorCredentials));
        history.push("/tutor/dashboard");
    }

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
                    <form className={styles.right_sub_cont} onSubmit={handleTutorLogin}>
                        <div className={styles.heading}>Tutor Login</div>
                        <div className={styles.lable}>Email</div>
                        <input type="email" placeholder="xyz@email.com" className={styles.input} name="email" onChange={handleTutorCredentials}/>
                        <div className={styles.lable}>Password</div>
                        <input type="password" placeholder="******" className={styles.input} name="password" onChange={handleTutorCredentials}/>
                        <br />
                        <button type="submit" className={styles.login_button}>Login</button>
                    </form>
                    
                </div>
            </div> : <div className={styles.tutor_main_Cont}>
                <div className={styles.left}>
                    <div className={styles.greeting}>Hello, Student!</div>
                    <div className={styles.sub_line}>Enter your personal details</div>
                    <div className={styles.sub_line}>and start learning with us.</div>
                    <Link to="/signup" className={styles.link}> 
                        <div className={styles.button}>Sign up</div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.right_sub_cont} onSubmit={handleStudentLogin}>
                        <div className={styles.heading}>Student Login</div>
                        <div className={styles.lable}>Email</div>
                        <input type="email" placeholder="xyz@email.com" className={styles.input} name="email" onChange={handleStudentCredentials}/>
                        <div className={styles.lable}>Password</div>
                        <input type="password" placeholder="******" className={styles.input} name="password" onChange={handleStudentCredentials}/>
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
