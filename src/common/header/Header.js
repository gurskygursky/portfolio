import React from "react";
import style from './Header.module.css';


export const Header = (props) => {
    return (
            <div className={style.contentHeader}>
                <p className={style.contentDescription}>{props.description}</p>
                <h2 className={style.contentHeaderTitle}>{props.title}</h2>
            </div>

    );
}

