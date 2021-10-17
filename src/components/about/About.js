import React from "react";
import style from './About.module.css';
import {Header} from "../../common/header/Header";


export const About = () => {
    return (
        <div className={style.content}>
            <Header title={"About Me"}
                    description={"Get to know me"}
            />
            <div className={style.infoSection}>
                <div className={style.infoImg}>
                    <img className={style.img} src="" alt="About Picture"/>
                </div>
                <div className={style.contentInfo}>
                    <div className={style.contentBlock}>
                        <h2 className={style.contentSubtitle}>Who am i?</h2>
                        <h6 className={style.contentTitle}>I'm Yegor Gursky, a Frontend Developer</h6>
                        <div className={style.contentDescription}>
                            <p>I am a freelancer based in the Belarus. </p>
                        </div>
                    </div>
                    <div className={style.contentContact}>
                        <address className={style.contactInfo}>
                            <div className={style.row}>
                                <div className={style.singleInfo}>
                                    <span>Name:</span>
                                    <p>Yegor Gursky</p>
                                </div>
                                <div className={style.singleInfo}><span>Age:</span>
                                    <p>29</p>
                                </div>
                            </div>
                            <div className={style.row}>

                                <div className={style.singleInfo}>
                                    <span>Email:</span>
                                    <p><a href="mailto:gurskygursky@example.com">gurskygursky@example.com</a></p>
                                </div>
                                <div className={style.singleInfo}><span>From:</span>
                                    <p>Minsk, Belarus</p>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}

