import React from "react";
import style from './Skills.module.css';
import {Header} from '../../common/header/Header';
import js_icon from '../../assets/image/skill icon/4373213_js_logo_logos_icon.png';
import html_icon from '../../assets/image/skill icon/294678_html5_icon.png';
import react_icon from '../../assets/image/skill icon/7423888_react_react native_icon.png';
import web_design from '../../assets/image/skill icon/49659_webdesign_icon.png';
import express_js from '../../assets/image/skill icon/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png';
import ts_icon from '../../assets/image/skill icon/typescript.png'
const progressbarBack = {
    backgroundColor: '#2f2f2f',
    // backgroundColor: '#009e66',
    borderRadius: '2px',
    fontSize: '15px',
    height: '12px',
    // overflow: 'visible',
    width: 100,


}
const progressbar = {

}
export const Skills = () => {
    return (
        <div className={style.content}>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <div className={style.skillSection}>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        {/*<div style={progressbarBack}>*/}
                        {/*    <div style={progressbar}></div>*/}
                        {/*</div>*/}

                        <img className={style.imageIcon} src={html_icon}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>HTML/CSS</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={web_design}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Web Design</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={js_icon}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Javasript</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={react_icon}/>
                        <div className={style.contentDescription}>
                            <h3 className={style.descriptionTitle}>React JS</h3>
                            <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                        </div>
                    </div>

                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={ts_icon}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>TypeScript</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={express_js}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Express.js</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

