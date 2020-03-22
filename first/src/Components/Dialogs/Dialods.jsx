import React from "react";
import css from "./Dialogs.module.css"
let Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.dialog}>
                    First
                </div>
                <div className={css.dialog+' '+css.active}>
                    First 1
                </div><div className={css.dialog}>
                First 2
            </div><div className={css.dialog}>
                First 3
            </div><div className={css.dialog}>
                First 4
            </div>
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