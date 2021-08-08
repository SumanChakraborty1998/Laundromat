import React, { useEffect, useState } from "react";
import styles from "./SignUpCont.module.css";
import axios from "axios";
import {useDispatch} from "react-redux"
import { studentRegister, tutorRegister } from "../../Redux/SignUp/action";
import { useHistory } from "react-router-dom";

function SignUpCont() {
    const [tutor, setTutor] = useState(false);
    const [student, setStudent] = useState(false);
    const ImageRef = React.useRef(null);
    const ImageRef2 = React.useRef(null);
    const BaseUrlImgur = "https://api.imgur.com/3/image";
    // const [uploading, setUploading] = useState(false);
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCheck = (e) => {
        const { checked } = e.target;
        setCheck(checked);
    };

    const [basicDetails, setBasicDetails] = useState(true);
    const [qualification, SetQualification] = useState(false);
    const [verification, setVerification] = useState(false);
    const [done, SetDone] = useState(false);

    const studentInitialPayload = {
        name: "",
        age: "",
        currently_reading: "",
        mobile: "",
        email: "",
        password: "",
        re_type: "",
        address: "",
    };

    const basicInitialPayload = {
        name: "",
        age: "",
        gender: "",
        mobile: "",
        email: "",
        subjects: "",
        location: "",
        password: "",
        re_type: "",
    };

    const qualificationInitialPayload = {
        qualification: "",
        graduation_percentage: "",
        experience: "",
        skills: "",
        reason: "",
    };

    const verificationInitialPayload = {
        aadhaar_number: "",
        current_address: "",
        permanent_address: "",
        profile_photo: "",
        aadhaar_image: "",
    };

    const [studentData, setStudentData] = useState(studentInitialPayload);
    const [tutorbasicDetails, setTutorBasicDetails] =useState(basicInitialPayload);
    const [tutorQualificationDetails, setTutorQualificationDetails] = useState(qualificationInitialPayload);
    const [tutorVerificationDetails, setTutorVerificationDetails] = useState(verificationInitialPayload);

    const [fullTutorData, setFullTutorData] = useState({});

    const handleStudentData = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value,
        });
    };

    const handleTutorBasicDetails = (e) => {
        const { name, value } = e.target;
        setTutorBasicDetails({
            ...tutorbasicDetails,
            [name]: value,
        });
    };

    const handleTutorQualificationDetails = (e) => {
        const { name, value } = e.target;
        setTutorQualificationDetails({
            ...tutorQualificationDetails,
            [name]: value,
        });
    };

    const handleTutorVerificationDetails = (e) => {
        const { name, value } = e.target;
        setTutorVerificationDetails({
            ...tutorVerificationDetails,
            [name]: value,
        });
    };

    const handleSetTutor = () => {
        setTutor(true);
    };

    const handleSetStudent = () => {
        setStudent(true);
    };

    const handleQualification = (e) => {
        e.preventDefault();
        setBasicDetails(false);
        SetQualification(true);
        setVerification(false);
        SetDone(false);
        console.log(tutorbasicDetails);
    };

    const handleVerification = (e) => {
        e.preventDefault();
        setBasicDetails(false);
        SetQualification(false);
        setVerification(true);
        SetDone(false);
        console.log(tutorQualificationDetails);
    };

    const handleDone = () => {
        // e.preventDefault();
        setBasicDetails(false);
        SetQualification(false);
        setVerification(false);
        SetDone(true);

        if (student) {
            console.log(studentData);
        } else {
            console.log(tutorVerificationDetails);
        }
    };

    const handleImageProfilePicUpload = () => {
        // setUploading(true);
        const image = ImageRef.current.files[0];
        const data = new FormData();
        data.append("image", image);
        axios
            .post(BaseUrlImgur, data, {
                headers: {
                    Authorization: "Client-ID 1a5b3af64b5145d",
                },
            })
            .then((res) => {
                setTutorVerificationDetails({
                    ...tutorVerificationDetails,
                    profile_photo: res.data.data.link,
                });
                console.log(tutorVerificationDetails);
            })
            .catch((err) => {
                console.log(err);
            });
        // .finally(() => setUploading(false));
    };

    const handleImageAadharPicUpload = () => {
        // setUploading(true);
        const image = ImageRef2.current.files[0];
        const data = new FormData();
        data.append("image", image);
        axios
            .post(BaseUrlImgur, data, {
                headers: {
                    Authorization: "Client-ID 1a5b3af64b5145d",
                },
            })
            .then((res) => {
                setTutorVerificationDetails({
                    ...tutorVerificationDetails,
                    aadhaar_image: res.data.data.link,
                });
                console.log(tutorVerificationDetails);
            })
            .catch((err) => {
                console.log(err);
            });
        // .finally(() => setUploading(false));
    };

    const handleRedirect = () => {
        history.push("/login")
    }

    const handleSubmitStudentData = (e) => {
        e.preventDefault();
        dispatch(studentRegister(studentData));
        handleDone();
    }

    const handleSubmitTutorData = (e) => {
        e.preventDefault();
        dispatch(tutorRegister(fullTutorData));
        console.log(fullTutorData);
        handleDone();
    }

    // console.log(uploading);

    useEffect(() => {
        setFullTutorData({...tutorbasicDetails, ...tutorQualificationDetails, ...tutorVerificationDetails})
    }, [tutorbasicDetails, tutorQualificationDetails, tutorVerificationDetails])

    return (
        <div className={styles.sign_up_cont}>
            {tutor === false && student === false ? (
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
            ) : tutor === true ? (
                basicDetails ? (
                    <div className={styles.tutor_basic_details}>
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
                        <form
                            action=""
                            className={styles.form_main}
                            onSubmit={handleQualification}
                        >
                            <div className={styles.heading_name_age_gender}>
                                <div>Full Name</div>
                                <div>Age</div>
                                <div>Gender</div>
                            </div>
                            <div className={styles.heading_n_a_g_input}>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Enter Age"
                                    name="age"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                                <select
                                    name="gender"
                                    id=""
                                    onChange={handleTutorBasicDetails}
                                >
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className={styles.heading_number_mail}>
                                <div>Mobile Number</div>
                                <div>Email</div>
                            </div>
                            <div className={styles.mobile_email_input}>
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="xyz@gmail.com"
                                    name="email"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                            </div>
                            <div className={styles.heading_s_l_p}>
                                <div>Subject</div>
                                <div>Location</div>
                                <div>Password</div>
                                <div style={{marginLeft:"7px"}}>Re-enter Password</div>
                            </div>
                            <div className={styles.s_l_p_input}>
                                <select
                                    name="subjects"
                                    onChange={handleTutorBasicDetails}
                                >
                                    <option>Select Subject</option>
                                    <option>English</option>
                                    <option>Computer Science</option>
                                    <option>Math</option>
                                    <option>Science</option>
                                </select>
                                <select
                                    name="location"
                                    onChange={handleTutorBasicDetails}
                                >
                                    <option>Select Location</option>
                                    <option>Delhi East</option>
                                    <option>Delhi South</option>
                                    <option>Delhi North</option>
                                    <option>Noida</option>
                                </select>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    placeholder="Enter Password"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                                <input
                                    type="password"
                                    name="re_type"
                                    placeholder="Re-enter Password"
                                    onChange={handleTutorBasicDetails}
                                    required
                                />
                                {tutorbasicDetails.password ===
                                    tutorbasicDetails.re_type &&
                                tutorbasicDetails.password.length > 0 &&
                                tutorbasicDetails.re_type.length > 0 ? (
                                    <div
                                        style={{
                                            fontSize: "20px",
                                            color: "green",
                                            marginLeft: "690px",
                                            fontWeight: "900",
                                            position: "absolute",
                                            zIndex: "-0",
                                            marginTop: "-25px",
                                        }}
                                    >
                                        ✔
                                    </div>
                                ) : tutorbasicDetails.password.length > 0 ? (
                                    <div
                                        style={{
                                            fontSize: "20px",
                                            color: "red",
                                            marginLeft: "690px",
                                            position: "absolute",
                                            marginTop: "-25px",
                                        }}
                                    >
                                        ✘
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={
                                    (tutorbasicDetails.password.length === 0 &&
                                        tutorbasicDetails.re_type.length ===
                                            0) ||
                                    tutorbasicDetails.password !==
                                        tutorbasicDetails.re_type
                                }
                                // type="submit"
                                className={styles.continue_button}
                                // className={styles.continue_button}
                            >
                                Continue
                            </button>
                        </form>
                        <div className={styles.mandatory}>
                            All fields are mandatory *
                        </div>
                    </div>
                ) : qualification ? (
                    <div className={styles.tutor_basic_details}>
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
                        <form
                            action=""
                            className={styles.form_main}
                            onSubmit={handleVerification}
                        >
                            <div className={styles.heading_deg_marks_exp}>
                                <div>Degree</div>
                                <div>Marks in (%)</div>
                                <div>Experience (in years)</div>
                            </div>
                            <div className={styles.deg_marks_exp_input}>
                                <select
                                    name="qualification"
                                    onChange={handleTutorQualificationDetails}
                                >
                                    <option>Select Degree</option>
                                    <option>B.sc</option>
                                    <option>M.sc</option>
                                    <option>B.Tech</option>
                                    <option>B.A</option>
                                    <option>B.com</option>
                                    <option>B.C.A</option>
                                    <option>M.C.A</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder="Percentage"
                                    name="graduation_percentage"
                                    value={tutorQualificationDetails.graduation_percentage}
                                    onChange={handleTutorQualificationDetails}
                                    // maxength="2"
                                    required
                                />
                                <select
                                    name="experience"
                                    onChange={handleTutorQualificationDetails}
                                >
                                    <option>Experience</option>
                                    <option>Less than 1 year</option>
                                    <option>1 Years</option>
                                    <option>2 Years</option>
                                    <option>3 Years</option>
                                    <option>4 Years</option>
                                    <option>5 Years</option>
                                </select>
                            </div>
                            <div className={styles.heading_skills}>
                                <div>Skills</div>
                                <div>
                                    Why do you want to work for our company?
                                </div>
                            </div>
                            <div className={styles.skills_input}>
                                <textarea
                                    type="text"
                                    name="skills"
                                    onChange={handleTutorQualificationDetails}
                                />
                                <textarea
                                    type="text"
                                    name="reason"
                                    onChange={handleTutorQualificationDetails}
                                />
                            </div>
                            <button
                                className={styles.continue_button}
                                disabled={
                                    tutorQualificationDetails.reason === ""
                                }
                            >
                                Continue
                            </button>
                        </form>
                        <div className={styles.mandatory}>
                            All fields are mandatory *
                        </div>
                    </div>
                ) : verification ? (
                    <div className={styles.tutor_basic_details}>
                        <div className={styles.process_bar_main}>
                            <div className={styles.done_circle}>1</div>
                            <div className={styles.done_bar}></div>
                            <div className={styles.done_circle}>2</div>
                            <div
                                className={styles.done_bar}
                                style={{ marginRight: "-0px" }}
                            ></div>
                            <div
                                className={styles.current_circle}
                                style={{ marginLeft: "7px" }}
                            >
                                3
                            </div>
                            <div className={styles.empty_bar}></div>
                            <div className={styles.empty_circle}>4</div>
                        </div>
                        <div className={styles.process_bar_heading}>
                            <div>Basic Details</div>
                            <div>Qualification & Skills</div>
                            <div>Varification Details</div>
                            <div>Done</div>
                        </div>
                        <form
                            action=""
                            className={styles.form_main}
                            onSubmit={handleSubmitTutorData}
                        >
                            <div className={styles.heading_deg_marks_exp}>
                                <div>Aadhar Number</div>
                            </div>
                            <div className={styles.deg_marks_exp_input}>
                                <input
                                    type="number"
                                    placeholder="Enter aadhar number"
                                    name="aadhaar_number"
                                    onChange={handleTutorVerificationDetails}
                                />
                            </div>
                            <div className={styles.heading_address}>
                                <div>Current Address</div>
                                <div>Permanent Address</div>
                            </div>
                            <div className={styles.address_input}>
                                <textarea
                                    type="text"
                                    name="current_address"
                                    id="01"
                                    onChange={handleTutorVerificationDetails}
                                    value={
                                        tutorVerificationDetails.current_address
                                    }
                                    required
                                />
                                <textarea
                                    type="text"
                                    name="permanent_address"
                                    id="02"
                                    onChange={handleTutorVerificationDetails}
                                    value={
                                        tutorVerificationDetails.permanent_address
                                    }
                                    required
                                />
                            </div>
                            <div className={styles.heading_files}>
                                <div>Upload Picture</div>
                                <div>Upload Aadhar</div>
                            </div>
                            <div className={styles.file_input}>
                                <input
                                    type="file"
                                    ref={ImageRef}
                                    onChange={handleImageProfilePicUpload}
                                    required
                                />
                                <input
                                    type="file"
                                    ref={ImageRef2}
                                    onChange={handleImageAadharPicUpload}
                                    required
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    display: "flex",
                                    marginTop: "-10px",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    name="terms"
                                    style={{ width: "15px", height: "15px" }}
                                    onChange={handleCheck}
                                    required
                                />
                                <a
                                    style={{
                                        fontSize: "12px",
                                        marginLeft: "3px",
                                        marginTop: "-0px",
                                    }} target="_blank" href="https://drive.google.com/file/d/1dsXxCJzSx9ELJrudZ6QVFuJz0dsEDpCy/view?usp=sharing"
                                >
                                    Terms & Conditions
                                </a>
                            </div>
                            <button
                                className={styles.continue_button}
                                disabled={!check}
                            >
                                Submit
                            </button>
                        </form>
                        <div className={styles.mandatory}>
                            All fields are mandatory *
                        </div>
                    </div>
                ) : done ? (
                    <div className={styles.tutor_basic_details}>
                        <div className={styles.process_bar_main}>
                            <div className={styles.done_circle}>1</div>
                            <div className={styles.done_bar}></div>
                            <div className={styles.done_circle}>2</div>
                            <div className={styles.done_bar}></div>
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
                                <img
                                    src="https://i.imgur.com/C4jmsG5.png"
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className={styles.succesfull}>
                                Successfully Registered!
                            </div>
                            <button
                                className={styles.continue_button}
                                onClick={handleRedirect}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                ) : (
                    ""
                )
            ) : !done ? (
                <div className={styles.tutor_basic_details}>
                    <div className={styles.mandatory}>
                        All fields are mandatory *
                    </div>
                    <form
                        action=""
                        className={styles.studen_form_main}
                        onSubmit={handleSubmitStudentData}
                    >
                        <div className={styles.heading_name_age_gender}>
                            <div>Full Name</div>
                            <div>Age</div>
                            <div>Current Class</div>
                        </div>
                        <div className={styles.heading_n_a_g_input}>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                onChange={handleStudentData}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Enter Age"
                                name="age"
                                onChange={handleStudentData}
                                required
                            />
                            <select
                                name="currently_reading"
                                onChange={handleStudentData}
                            >
                                <option>Current Class</option>
                                <option>5th</option>
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                                <option>9th</option>
                                <option>10th</option>
                                <option>11th</option>
                                <option>12th</option>
                            </select>
                        </div>
                        <div className={styles.heading_number_mail}>
                            <div>Mobile Number</div>
                            <div>Email</div>
                        </div>
                        <div className={styles.mobile_email_input}>
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                name="mobile"
                                onChange={handleStudentData}
                                required
                            />
                            <input
                                type="email"
                                placeholder="xyz@gmail.com"
                                name="email"
                                onChange={handleStudentData}
                                required
                            />
                        </div>
                        <div className={styles.heading_add}>Address</div>
                        <div className={styles.add_input}>
                            <textarea
                                name="address"
                                onChange={handleStudentData}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.heading_student_password}>
                            <div>Password</div>
                            <div style={{ marginLeft: "9px" }}>
                                Re-enter Password
                            </div>
                            {studentData.password === studentData.re_type &&
                            studentData.password.length > 0 &&
                            studentData.re_type.length > 0 ? (
                                <div
                                    style={{
                                        fontSize: "10px",
                                        marginTop: "3.5px",
                                        color: "green",
                                        marginLeft: "5px",
                                        fontWeight: "900",
                                    }}
                                >
                                    Matched
                                </div>
                            ) : studentData.password.length > 0 ? (
                                <div
                                    style={{
                                        fontSize: "10px",
                                        marginTop: "3.5px",
                                        color: "red",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Not matching with previous password
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className={styles.s_l_p_input}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleStudentData}
                                required
                            />
                            <input
                                type="password"
                                name="re_type"
                                placeholder="Re-enter Password"
                                onChange={handleStudentData}
                                required
                            />
                        </div>
                        <button
                            disabled={
                                (studentData.password.length === 0 &&
                                    studentData.re_type.length === 0) ||
                                studentData.password !== studentData.re_type
                            }
                            type="submit"
                            className={styles.continue_button}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            ) : (
                <div
                    action=""
                    className={styles.form_main}
                    style={{ marginTop: "72px" }}
                >
                    <div className={styles.done_icon}>
                        <img
                            src="https://i.imgur.com/C4jmsG5.png"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={styles.succesfull}>
                        Successfully Registered!
                    </div>
                    <button
                        className={styles.continue_button}
                        onClick={handleRedirect}
                    >
                        Done
                    </button>
                </div>
            )}
        </div>
    );
}

export default SignUpCont;
