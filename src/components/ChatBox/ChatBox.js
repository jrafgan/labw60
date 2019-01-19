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
                    datetime={new Date(msg.datetime).toDateString() + ' |***| ' + new Date(msg.datetime).toLocaleTimeString()}
                />
            ))}
        </ol>
    );
};

export default ChatBox;