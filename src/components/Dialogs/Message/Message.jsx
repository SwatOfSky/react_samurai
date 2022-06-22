import React from "react";
import '../Dialogs.css';

const MessageItem = (props) => {
    return <div className="message">{props.text}</div>
}

export default MessageItem