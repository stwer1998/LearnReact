import React from "react";
import css from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

var arrayDialogs=[
    {id:1, name:"Dialog 1"},{id:2, name:"Dialog 2"},
    {id:3, name:"Dialog 3"},{id:4, name:"Dialog 4"},
    {id:5, name:"Dialog 5"},{id:6, name:"Dialog 6"}
]
var arrayMessage=[
    {message:"Hi"},{message:"Hello"},{message:"howdy"}
]


let DialogsItem=(props)=>
{
    return(
        <NavLink to={"/dialogs/"+props.id} className={css.dialog}>
            {props.name}
            <br/>
        </NavLink>
    );
}

let Message=(props)=>{
    return  <div className={css.message}>{props.message}</div>
}

let Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {
                    arrayDialogs.map(item=><DialogsItem name={item.name} id={item.id}/>)
                }
            </div>
            <div className={css.messages}>
                {
                    arrayMessage.map(item=><Message message={item.message}/>)
                }
            </div>
        </div>
    );
}

export default Dialogs;