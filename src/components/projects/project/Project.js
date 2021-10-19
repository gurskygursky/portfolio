import React from "react";
import style from './Project.module.css';

export const Project = (props) => {
    return (
            <div className={style.container}>
                <div className={style.contentImg}><a className={style.img} href="#0">
                    {/*<img className={style.imgCard} src="img/post-1.jpg" alt="Blog post"/>*/}
                    {/*<span className={style.contentDate}>11 Dec, 20</span>*/}
                </a>
                    <div className={style.contentPost}>
                        <a href="#0">
                            <h5 className={style.contentTitle}>{props.title}</h5>
                        </a>
                        <p className={style.contentDescription}>{props.description}</p>
                    </div>
                </div>
            </div>
    );
}
