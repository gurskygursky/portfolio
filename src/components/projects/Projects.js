import React from "react";
import style from './Projects.module.css';
import {Header} from "../../common/header/Header";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <div className={style.containerProjects}>
                <Project description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."}
                         title={"My first React project"}
                />
                <Project description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."}
                         title={"My first React project"}
                />
            </div>
        </div>
    );
}
