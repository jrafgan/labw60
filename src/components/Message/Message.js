import React from 'react';

const Message = props => {
    return (
        <li>
            <p>{props.message} - {props.author}</p>
        </li>
    );
};

export default Message;