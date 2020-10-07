import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogsItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {

   let dialogsData = [
       {id: 1, name: 'Dimych'},
       {id: 2, name: 'Andrey'},
       {id: 3, name: 'Sveta'},
       {id: 4, name: 'Sasha'},
       {id: 5, name: 'Viktor'},
       {id: 6, name: 'Valera'}
   ]

   let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-weber'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
 
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
            </div>

        </div>
    )
}

export default Dialogs;