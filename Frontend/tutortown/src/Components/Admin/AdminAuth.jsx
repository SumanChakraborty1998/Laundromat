import React, { useState } from "react";
import styles from "./AdminAuth.module.css";
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {studentLogin, tutorLogin} from "../../Redux/Login/action"

function AdminAuth() {

    const [isAuth, setIsAuth] = useState(false)
    const history = useHistory();
    
    const adminInitialData = {
        email: "",
        password: ""
    }
    
    const [adminCredentials, setAdminCredentials] = useState(adminInitialData);

    const handleAdminCredentials = (e) => {
        const {name, value} = e.target;

        setAdminCredentials({...adminCredentials, [name]: value})
    }

    const handleAdminLogin = () => {
        if (adminCredentials.email==="admin@gmail.com" && adminCredentials.password==="admin")
        history.push("/admin/tutorTown/authenticated/authorized")
    }


    return (
        <>
        <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <div className={styles.login_cont}>
            
                
            <div className={styles.tutor_main_Cont}>
                <div className={styles.left}>
                    <div className={styles.greeting}>Hello, Admin!</div>
                    <div className={styles.sub_line}>Welcome to your world!</div>
                    <div className={styles.sub_line}>Login to Continue</div>
                    <Link to="/" className={styles.link}> 
                        <div className={styles.button}>Home</div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.right_sub_cont} onSubmit={handleAdminLogin}>
                        <div className={styles.heading}>Admin Login</div>
                        <div className={styles.lable}>Email</div>
                        <input type="email" placeholder="xyz@email.com" className={styles.input} name="email" onChange={handleAdminCredentials}/>
                        <div className={styles.lable}>Password</div>
                        <input type="password" placeholder="******" className={styles.input} name="password" onChange={handleAdminCredentials}/>
                        <br />
                        <button type="submit" className={styles.login_button}>Login</button>
                    </form>
                    
                </div>
            </div> 
                
            
        </div>
        <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default AdminAuth;
