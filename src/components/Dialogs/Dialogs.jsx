import React from "react";
import './Dialogs.css';

const Dialogs = (props) => {
    return (
        <div className='dialogs app-wrapper-content'>
        <div className='dialogs-items'>
            <div className='dialog'>
                Dima
            </div>
            <div className='dialog active'>
                Darina
            </div>
            <div className='dialog'>
                Olga
            </div>
            <div className='dialog'>
                Natasha
            </div>
            <div className='dialog'>
                Sasha
            </div>
            <div className='dialog'>
                Dima
            </div>

        </div>
            <div className='messages'>
                <div className="message">Pararara</div>
                <div className="message">Skibidibu</div>
                <div className="message">How old are you?</div>
            </div>
        </div>
    )
}

export default Dialogs