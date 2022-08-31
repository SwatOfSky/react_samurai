import React from "react";
import './Dialogs.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody= {onNewMessageChange} sendMessage= {onSendMessageClick} store={state}/>
}

export default DialogsContainer