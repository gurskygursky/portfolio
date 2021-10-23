import React from "react";
import style from './Projects.module.css';
import {Header} from "../../common/header/Header";
import todo from "../../assets/image/15.png"
import counter from "../../assets/image/16359209.jpg"
import social from "../../assets/image/Social-Networking-Management-Tools.png";


export const Projects = () => {
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <div className={style.containerProjects}>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <a className={style.link} href={"https://github.com/gurskygursky"}>
                            <div className={style.imageWrapper}>
                                <div className={style.imageWrapper2}>
                                    <h6> Social Network</h6>
                                    <span>More Info</span>
                                </div>
                                <img className={style.img} src={social} alt={'socialnetwork'}/>
                            </div>
                        </a>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Social Network</h5>
                            <p className={style.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <a className={style.link} href={"https://github.com/gurskygursky"}>
                            <div className={style.imageWrapper}>
                                <div className={style.imageWrapper2}>
                                    <h6>Todolist</h6>
                                    <span>More Info</span>
                                </div>
                                <img className={style.img} src={todo} alt={'todolist'}/>
                            </div>
                        </a>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Todolist</h5>
                            <p className={style.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <a className={style.link} href={"https://github.com/gurskygursky"}>
                            <div className={style.imageWrapper}>
                                <div className={style.imageWrapper2}>
                                    <h6>Counter</h6>
                                    <span>More Info</span>
                                </div>
                                <img className={style.img} src={counter} alt={'counter'}/>
                            </div>
                        </a>
                    </div>
                    <div className={style.contentProjectInfo}>
                        <h5 className={style.contentTitle}>Counter</h5>
                        <p className={style.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
