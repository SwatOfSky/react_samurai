import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/reducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> );
    let messageElements = props.messagesData.map (m => <MessageItem text={m.text} />);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = (updateNewMessageBodyCreator(body))
        props.dispatch(action)
    }

    return (
        <div className='dialogs app-wrapper-content'>
            <div className='dialogs-items'>
                {dialogsElements}
                </div>

            <div className='messages'>
                <div>{messageElements}</div>
                 </div>
                 <div>
            <div><textarea value={newMessageBody} 
            onChange={onNewMessageChange}
            placeholder='enter your message'></textarea></div>
            <div><button onClick={ onSendMessageClick }>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs