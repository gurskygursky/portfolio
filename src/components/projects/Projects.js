import React from "react";
import style from './Projects.module.css';
import {Header} from "../../common/header/Header";
import {Project} from "./project/Project";
import social from "../../assets/image/Social-Networking-Management-Tools.png"
import todo from "../../assets/image/15.png"
import counter from "../../assets/image/16359209.jpg"

export const Projects = () => {
    const divStyleImageSocialNetwork = {
        backgroundImage: `url(${social})`,
    };
    const divStyleImageTodo = {
        backgroundImage: `url(${todo})`,
    };
    const divStyleCounter = {
        backgroundImage: `url(${counter})`,
    }
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <div className={style.containerProjects}>
                <Project description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."}
                         title={"Social Network"}
                         style={divStyleImageSocialNetwork}
                />
                <Project description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                "Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."}
                         title={"Todolist"}
                         style={divStyleImageTodo}
                />
                <Project description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."}
                         title={"Counter"}
                         style={divStyleCounter}
                />
            </div>
        </div>
    );
}
