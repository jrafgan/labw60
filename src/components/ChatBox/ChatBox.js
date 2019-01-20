import React from 'react';
import Message from "../Message/Message";
import './ChatBox.css';

const ChatBox = props => {
    const messages = props.messages.reverse();
    return (
        <ol className="chatBox">
            {messages.map((msg, key) =>(
                <Message
                    key={key}
                    message={msg.message}
                    author={msg.author}
                    datetime={msg.datetime}
                />
            ))}
        </ol>
    );
};

export default ChatBox;