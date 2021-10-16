import React from "react";
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.container}>
            <ul className={style.linkContainer}>

                <li className={style.link}><a href="">Homepage</a></li>
                <li className={style.link}><a href="">About</a></li>
                <li className={style.link}><a href="">Skills</a></li>
                <li className={style.link}><a href="">Projects</a></li>
                <li className={style.link}><a href="">Contacts</a></li>
            </ul>
        </div>
    );
}

