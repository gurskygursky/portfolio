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
                        <div className={style.imageWrapper}>
                            <div className={style.imageWrapper2}>
                                <div className={style.contentDescription}>
                                    <p className={style.description}>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                        eum alias id, repellendus magni, quas.</p>
                                    <a className={style.link}
                                       title={"https://github.com/gurskygursky"}
                                       href={"https://github.com/gurskygursky"}
                                    >
                                        <span className={style.buttonLink}>More Info</span>
                                    </a>
                                </div>
                            </div>
                            <img className={style.img} src={social} alt={'socialnetwork'}/>
                        </div>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Social Network</h5>
                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                            <div className={style.imageWrapper}>
                                <div className={style.imageWrapper2}>
                                    <div className={style.contentDescription}>
                                        <p className={style.description}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                            eum alias id, repellendus magni, quas.</p>
                                        <a className={style.link}
                                           title={"https://github.com/gurskygursky"}
                                           href={"https://github.com/gurskygursky"}
                                        >
                                        <span className={style.buttonLink}>More Info</span>
                                        </a>
                                    </div>
                                </div>
                                <img className={style.img} src={todo} alt={'todolist'}/>
                            </div>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Todolist</h5>

                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                            <div className={style.imageWrapper}>
                                <div className={style.imageWrapper2}>
                                    <div className={style.contentDescription}>
                                        <p className={style.description}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                            eum alias id, repellendus magni, quas.</p>
                                        <a className={style.link}
                                           title={"https://github.com/gurskygursky"}
                                           href={"https://github.com/gurskygursky"}>
                                        <span className={style.buttonLink}>More Info</span>
                                        </a>
                                    </div>
                                </div>
                                <img className={style.img} src={counter} alt={'counter'}/>
                            </div>
                    </div>
                    <div className={style.contentProjectInfo}>
                        <h5 className={style.contentTitle}>Counter</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
