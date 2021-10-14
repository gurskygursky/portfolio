import React from "react";
import style from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={style.container}>
            <div className={style.sectionHeader}>
                <p>Feel free to contact me anytimes</p>
                <h2>Get in Touch</h2>
            </div>
            <div className={style.sectionContactsForm}>
                <form className={style.messageForm}>
                    <h4>Message Me</h4>
                    <input className={style.input} type={'text'} placeholder={'Name'}/><br/>
                    <input className={style.input} type={'email'} placeholder={'Email'}/><br/>
                    <input className={style.input} type={'text'} placeholder={'Subject'}/><br/>
                    <textarea className={style.textarea} placeholder={'Message'}/><br/>
                    <button className={style.button}>Send Message</button>
                </form>
                <div className={style.sectionContactsInfo}>
                    <h4>Contact Info</h4>
                    <p>Always available for freelance<br/>
                        work if the right project comes along,<br/>
                        Feel free to contact me!<br/>
                    </p>
                    <ul>
                        <li>
                            <div>
                                <span>icon</span>
                                <div>
                                    <h6>Name</h6>
                                    <span>Yegor Gursky</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>icon</span>
                                <div>
                                    <h6>Location</h6>
                                    <span>Minsk, Belarus</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>icon</span>
                                <div>
                                    <h6>Call Me</h6>
                                    <span>Minsk, Belarus</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>icon</span>
                                <div>
                                    <h6>Email Me</h6>
                                    <span>
                                        <a href="mailto:gurskygursky@example.com">
                                            gurskygursky@example.com
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

