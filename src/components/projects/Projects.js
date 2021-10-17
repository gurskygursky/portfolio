import React from "react";
import style from './Projects.module.css';
import {Header} from "../../common/header/Header";

export const Projects = () => {
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
        </div>
    );
}

