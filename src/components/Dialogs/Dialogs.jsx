import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItems = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Tatiana" id="1" />
                <DialogItems name="Nona" id="2" />
                <DialogItems name="Sveatik" id="3" />
                <DialogItems name="Katerina" id="4" />
                <DialogItems name="Barsik" id="5" />
                <DialogItems name="Mia" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your It-COURSE ?"/>
                <Message message="Hope all great"/>
                <Message message="Hope all great"/>
                <Message message="Hope all great"/>
            </div>
        </div>
    )
}

export default Dialogs;