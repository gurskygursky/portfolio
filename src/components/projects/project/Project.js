import React from "react";
import style from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={style.container}>
            <div className={style.contentImg} style={props.style}>
                {/*<a className={style.button}>Click Me!</a>*/}
            </div>
            <div className={style.contentProjectInfo} >
                    <h5 className={style.contentTitle}>{props.title}</h5>
                <p className={style.contentDescription}>{props.description}</p>
            </div>
        </div>
    );
}
