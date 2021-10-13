import React from "react";
import style from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Contact</h2>
            </div>
            <form>

                <input/><br/>
                <input/><br/>
                <textarea/><br/>
            </form>
            <button className={style.button}>send </button>
        </div>
    );
}

