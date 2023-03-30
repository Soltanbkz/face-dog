import c from './Dialogs.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id 
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
    <div className={c.dialog}>{props.message}</div>)
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name='Dimysh' id='1' />
                <DialogItem name='Beknazar' id='2' />
                <DialogItem name='Tabigat' id='3' />
                <DialogItem name='Alex' id='4' />
                <DialogItem name='Sveta' id='5' />
                <DialogItem name='Steve' id='6' />
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='How is your project'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs