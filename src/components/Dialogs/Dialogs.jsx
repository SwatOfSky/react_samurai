import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> );
    let messageElements = props.messagesData.map (m => <MessageItem text={m.text} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message)
    }
    
    return (
        <div className='dialogs app-wrapper-content'>
            <div className='dialogs-items'>
                {dialogsElements}
                </div>

            <div className='messages'>
                {messageElements}
                 </div>
            <div><textarea ref={newMessageElement}></textarea></div>
            <div><button onClick={addMessage}>Send message</button></div>
        </div>
    )
}

export default Dialogs