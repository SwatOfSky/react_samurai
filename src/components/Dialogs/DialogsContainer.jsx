import React from "react";
import './Dialogs.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {
                store => {
                    let state = store.getState();

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} store={state} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer