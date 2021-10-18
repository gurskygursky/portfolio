import React from "react";
import style from './Projects.module.css';
import {Header} from "../../common/header/Header";

export const Projects = () => {
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <div className={style.contentPost}>
                <div className={style.contentImg}><a className={style.img} href="#0">
                    {/*<img className={style.imgCard} src="img/post-1.jpg" alt="Blog post"/>*/}
                        {/*<span className={style.contentDate}>11 Dec, 20</span>*/}
                </a>
                    <div className={style.contentPost}>
                        <a href="#0">
                            <h5 className={style.contentTitle}>React project Todolist</h5>
                        </a>
                        <p className={style.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                </div>
            </div>

            {/*<div className={style.content}>*/}
            {/*    <h3>Todolist</h3>*/}
            {/*    <span className={style.description}></span>*/}
            {/*</div>*/}

        </div>
    );
}
