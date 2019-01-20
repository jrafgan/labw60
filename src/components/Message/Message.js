import React from 'react';
import avatar from '../../assets/ic-msg.png';
import './Message.css';

const Message = props => {
    let date = new Date(props.datetime);
    return (
        <li className="message">
            <img src={avatar} alt={props.author} className="avatar"/>
            <span className="time">{date.toLocaleTimeString('en-US', { hour12: false })}</span>
            <p className="author">{props.author}    <span>написал:</span></p>
            <p className="text">{props.message}</p>
        </li>
    );
};

export default Message;