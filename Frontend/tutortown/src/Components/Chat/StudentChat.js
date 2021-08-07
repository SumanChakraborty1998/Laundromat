import React from 'react';
import styles from './ChatUi';

const StudentChat = ({studentName, studentChat}) => {
    return (
        <div className={styles.chat}>{studentName}{studentChat}</div>
    ) 
}

export default StudentChat