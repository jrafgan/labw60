import React from 'react';
import Message from "../Message/Message";
import './ChatBox.css';

const ChatBox = props => {
    return (
        <ol className="chatBox">
            {props.messages.map((msg, key) =>(
                <Message
                    key={key}
                    message={msg.message}
                    author={msg.author}
                />
            ))}
        </ol>
    );
};

export default ChatBox;