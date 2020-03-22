import React from "react";
import css from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let DialogsItem=(props)=>
{
    return(
        <NavLink to={"/dialogs/"+props.id} className={css.dialog}>
            {props.name}
            <br/>
        </NavLink>
    );
}

let Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <DialogsItem name={"First 1"} id={"1"}/>
                <DialogsItem name={"First 2"} id={"2"}/>
                <DialogsItem name={"First 3"} id={"3"}/>
                <DialogsItem name={"First 4"} id={"4"}/>
                <DialogsItem name={"First 5"} id={"5"}/>


            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>Hi yoyo</div>
                <div className={css.message}>Hi konishua</div>

            </div>
        </div>
    );
}

export default Dialogs;