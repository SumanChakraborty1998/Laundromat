import React from 'react';
import ChatUi from '../Chat/ChatUi';
import chat from '../Images/chat.png';
import styles from './Join.module.css';

const Join = () => {

    const [isRender, setChatrender] = React.useState(false);

    const showchatdisplay  =() => {
         setChatrender(!isRender)
    }
    return (
        <div className={styles.chatdiv}>
             
            <div>
            {isRender && <ChatUi/>}
            </div>
            <img className={isRender ?  styles.chaticon : styles.chaticon1} src={chat} alt='chat icon' onClick={showchatdisplay}/>
        </div>
    )
}

export default Join