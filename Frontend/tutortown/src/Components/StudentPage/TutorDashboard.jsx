import React from "react";
import styles from "./Tutor.module.css";
import axios from "axios";

export const TutorDashboard = () => {
    const [students, setStudents] = React.useState([]);

    const handleRender = (id = "610d46db3c1c0647584bd481") => {
        axios
            .get(
                `http://localhost:3001/bookings/tutors/610d46db3c1c0647584bd481`,
            )
            .then((res) => setStudents(res.data.data));
        console.log(id);
    };

    React.useEffect(() => {
        handleRender("610d6a0488073b2d941ff6aa");
    }, []);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
                {/* <img src={ } alt="Profile" /> */}
                <div className={styles.dashMainCont}>
                    <div className={styles.dashHeading}>
                        <div>SN</div>
                        <div>SUBJECT NAME</div>
                        <div>STUDENT</div>
                        <div>PLACE</div>
                        {/* <div>TYPE</div> */}
                    </div>
                    {console.log("SUman", students)}

                    {students?.length > 0 &&
                        students?.map((student, i) => (
                            <div key={student?._id} className={styles.dashRows}>
                                <div>{i + 1}</div>

                                <div>
                                    {student?.subject?.name?.toUpperCase()}
                                </div>
                                <div>
                                    {student?.student?.name?.toUpperCase()}
                                </div>
                                <div>{student?.place?.name?.toUpperCase()}</div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        ))}
                    <hr />
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};
