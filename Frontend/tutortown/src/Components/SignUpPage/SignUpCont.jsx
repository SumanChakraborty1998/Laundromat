import React, { useState } from "react";
import styles from "./SignUpCont.module.css";


function SignUpCont() {
    const [tutor, setTutor] = useState(false);
    const [student, setStudent] = useState(false);

    const [basicDetails, setBasicDetails] = useState(true);
    const [qualification, SetQualification] = useState(false);
    const [verification, setVerification] = useState(false);
    const [done, SetDone] = useState(false);

    const handleSetTutor = () => {
        setTutor(true);
    }

    const handleSetStudent = () => {
        setStudent(true);
    }

    const handleQualification = (e) => {
        e.preventDefault();
        setBasicDetails(false);
        SetQualification(true);
        setVerification(false);
        SetDone(false);
    }

    const handleVerification = (e) => {
        e.preventDefault();
        setBasicDetails(false);
        SetQualification(false);
        setVerification(true);
        SetDone(false);
    }

    const handleDone = (e) => {
        e.preventDefault();
        setBasicDetails(false);
        SetQualification(false);
        setVerification(false);
        SetDone(true);
    }

    


    return (
        <div className={styles.sign_up_cont}>
            {tutor === false && student === false ? <div className={styles.select_role}>
                <div className={styles.select_role_heading}>
                    Select Your Role
                </div>
                <div className={styles.role_button} onClick={handleSetStudent}>STUDENT</div>
                <div className={styles.role_button} onClick={handleSetTutor}>TUTOR</div>
            </div> : tutor === true ? basicDetails ? <div className={styles.tutor_basic_details}>
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
                    <button className={styles.continue_button} onClick={handleQualification}>Continue</button>
                </form>
            </div> : qualification ? <div className={styles.tutor_basic_details}>
                <div className={styles.process_bar_main}>
                    <div className={styles.done_circle}>1</div>
                    <div className={styles.done_bar}></div>
                    <div className={styles.current_circle}>2</div>
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
                    <div className={styles.heading_deg_marks_exp}>
                        <div>Degree</div>
                        <div>Marks in (%)</div>
                        <div>Experience (in years)</div>
                    </div>
                    <div className={styles.deg_marks_exp_input}>
                        <select name="" id="">
                            <option value="">Select Degree</option>
                            <option value="">B.sc</option>
                            <option value="">M.sc</option>
                            <option value="">B.Tech</option>
                            <option value="">B.A</option>
                            <option value="">B.com</option>
                            <option value="">B.C.A</option>
                            <option value="">M.C.A</option>
                        </select>
                        <input type="number" placeholder="Percentage"/>
                        <select name="" id="">
                            <option value="">Experience</option>
                            <option value="">Less than 1 year</option>
                            <option value="">1 Years</option>
                            <option value="">2 Years</option>
                            <option value="">3 Years</option>
                            <option value="">4 Years</option>
                            <option value="">5 Years</option>
                        </select>
                    </div>
                    <div className={styles.heading_skills}>
                        <div>Skills</div>
                        <div>Why do you want to work for our company?</div>
                    </div>
                    <div className={styles.skills_input}>
                    <textarea type="text"/>
                        <textarea type="text"/>
                    </div>
                    <button className={styles.continue_button} onClick={handleVerification}>Continue</button>
                </form>
            </div> : verification ? <div className={styles.tutor_basic_details}>
                <div className={styles.process_bar_main}>
                    <div className={styles.done_circle}>1</div>
                    <div className={styles.done_bar}></div>
                    <div className={styles.done_circle}>2</div>
                    <div className={styles.done_bar} style={{marginRight:"-0px"}}></div>
                    <div className={styles.current_circle} style={{marginLeft:"7px"}}>3</div>
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
                    <div className={styles.heading_deg_marks_exp}>
                        <div>Aadhar Number</div>
                    </div>
                    <div className={styles.deg_marks_exp_input}>
                        <input type="number" placeholder="Enter aadhar number"/>
                    </div>
                    <div className={styles.heading_address}>
                        <div>Current Address</div>
                        <div>Permanent Address</div>
                    </div>
                    <div className={styles.address_input}>
                        <textarea type="text"/>
                        <textarea type="text"/>
                    </div>
                    <div className={styles.heading_files}>
                        <div>Upload Picture</div>
                        <div>Upload Aadhar</div>
                    </div>
                    <div className={styles.file_input}>
                        <input type="file"/>
                        <input type="file"/>
                    </div>
                    <button className={styles.continue_button} onClick={handleDone}>Submit</button>
                </form>
            </div> : done ? <div className={styles.tutor_basic_details}>
                <div className={styles.process_bar_main}>
                    <div className={styles.done_circle}>1</div>
                    <div className={styles.done_bar}></div>
                    <div className={styles.done_circle}>2</div>
                    <div className={styles.done_bar} ></div>
                    <div className={styles.done_circle}>3</div>
                    <div className={styles.done_bar}></div>
                    <div className={styles.done_circle}>4</div>
                </div>
                <div className={styles.process_bar_heading}>
                    <div>Basic Details</div>
                    <div>Qualification & Skills</div>
                    <div>Varification Details</div>
                    <div>Done</div>
                </div>
                <div action="" className={styles.form_main}>
                    <div className={styles.done_icon}>
                        <img src="https://i.imgur.com/C4jmsG5.png" alt="" style={{width:"100%"}}/>
                    </div>
                    <div className={styles.succesfull}>
                        Successfully Registered!
                    </div>
                    <button className={styles.continue_button} onClick={handleDone}>Done</button>
                </div>
            </div> : "" : !done ? <div className={styles.tutor_basic_details}>
            <form action="" className={styles.studen_form_main}>
                    <div className={styles.heading_name_age_gender}>
                        <div>Full Name</div>
                        <div>Age</div>
                        <div>Current Class</div>
                    </div>
                    <div className={styles.heading_n_a_g_input}>
                        <input type="text" placeholder="Enter Name"/>
                        <input type="number" placeholder="Enter Age"/>
                        <select name="" id="">
                            <option value="">Current Class</option>
                            <option value="">5th</option>
                            <option value="">6th</option>
                            <option value="">7th</option>
                            <option value="">8th</option>
                            <option value="">9th</option>
                            <option value="">10th</option>
                            <option value="">11th</option>
                            <option value="">12th</option>
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
                    <div className={styles.heading_add}>
                        Address
                    </div>
                    <div className={styles.add_input}>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button className={styles.continue_button} onClick={handleDone}>Submit</button>
                 </form>
                </div> : <div action="" className={styles.form_main} style={{marginTop:"72px"}}>
                    <div className={styles.done_icon}>
                        <img src="https://i.imgur.com/C4jmsG5.png" alt="" style={{width:"100%"}}/>
                    </div>
                    <div className={styles.succesfull}>
                        Successfully Registered!
                    </div>
                    <button className={styles.continue_button} onClick={handleDone}>Done</button>
                </div>}
        </div>
    );
}

export default SignUpCont;