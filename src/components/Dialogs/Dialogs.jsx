import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className='dialog'>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return <div className="message">{props.text}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Darina'},
        {id:3, name: 'Olga'},
        {id:4, name: 'Natasha'},
        {id:5, name: 'Sasha'},
        {id:6, name: 'Dima'}
    ]

    let messagesData = [
        {id:1, text: 'Pararara'},
        {id:2, text: 'Skibidibu'},
        {id:3, text: 'How old are you?'}
    ]

    let dialogsElements = dialogsData.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messageElements = messagesData.map (m => <MessageItem text={m.text} />);
    
    return (
        <div className='dialogs app-wrapper-content'>
            <div className='dialogs-items'>
                {dialogsElements}
                </div>

            <div className='messages'>
                {messageElements}
                 </div>
        </div>
    )
}

export default Dialogs