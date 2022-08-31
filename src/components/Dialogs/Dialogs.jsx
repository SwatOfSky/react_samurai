import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
    let state = props.store;

    let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> );
    let messageElements = state.messagesData.map (m => <MessageItem text={m.text} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className='dialogs app-wrapper-content'>
            <div className='dialogs-items'>
                {dialogsElements}
                </div>

            <div className='messages'>
                <div>{messageElements}</div>
                 
                 <div>
            <div><textarea value={newMessageBody} 
            onChange={onNewMessageChange}
            placeholder='enter your message'></textarea></div>
            <div><button onClick={ onSendMessageClick }>Send message</button></div>
            </div>
        </div>
        </div>
    )
}

export default Dialogs