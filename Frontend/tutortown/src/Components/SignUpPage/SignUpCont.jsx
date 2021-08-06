import React, { useState } from "react";
import styles from "./SignUpCont.module.css";


function SignUpCont() {
    const [tutor, setTutor] = useState(true);
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
                <div className={styles.role_button} onClick={handleSetStudent}>STUDENT</div>
                <div className={styles.role_button} onClick={handleSetTutor}>TUTOR</div>
            </div> : tutor === true ? <div className={styles.tutor_basic_details}>
                <div className={styles.process_bar_main}>
                    <div className={styles.current_circle}>1</div>
                    <div className={styles.empty_bar}></div>
                    <div className={styles.empty_circle}>2</div>
                    <div className={styles.empty_bar}></div>
                    <div className={styles.empty_circle}>3</div>
                    <div className={styles.empty_bar}></div>
                    <div className={styles.empty_circle}>4</div>
                </div>
                <div className={styles.process_bar_heading}>
                    <div>Basic Details</div>
                    <div>Qualification & Skills</div>
                    <div>Varification Details</div>
                    <div>Done</div>
                </div>
                <form action="" className={styles.form_main}>
                    <div className={styles.heading_name_age_gender}>
                        <div>Full Name</div>
                        <div>Age</div>
                        <div>Gender</div>
                    </div>
                    <div className={styles.heading_n_a_g_input}>
                        <input type="text" placeholder="Enter Name"/>
                        <input type="number" placeholder="Enter Age"/>
                        <select name="" id="">
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Others</option>
                        </select>
                    </div>
                    <div className={styles.heading_number_mail}>
                        <div>Mobile Number</div>
                        <div>Email</div>
                    </div>
                    <div className={styles.mobile_email_input}>
                    <input type="number" placeholder="Mobile Number"/>
                        <input type="email" placeholder="xyz@gmail.com"/>
                    </div>
                    <div className={styles.heading_s_l_p}>
                        <div>Subject</div>
                        <div>Location</div>
                        <div>Passsword</div>
                        <div>Re-enter Passsword</div>
                    </div>
                    <div className={styles.s_l_p_input}>
                        <select name="" id="">
                            <option value="">Select Subject</option>
                            <option value="">English</option>
                            <option value="">Computer Science</option>
                            <option value="">Math</option>
                            <option value="">Science</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select Location</option>
                            <option value="">Delhi East</option>
                            <option value="">Delhi South</option>
                            <option value="">Delhi North</option>
                            <option value="">Noida</option>
                        </select>
                        <input type="password" name="" id="" placeholder="Enter Password"/>
                        <input type="password" name="" placeholder="Re-enter Password"/> 
                    </div>
                    <button className={styles.continue_button}>Continue</button>
                </form>
            </div> : ""}
        </div>
    );
}

export default SignUpCont;