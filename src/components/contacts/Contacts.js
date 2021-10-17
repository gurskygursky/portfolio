import React from "react";
import style from './Contacts.module.css';
import {Header} from "../../common/header/Header";

export const Contacts = () => {
    return (
        <div className={style.container}>
            <Header description={"Feel free to contact me anytimes"}
                    title={"Get in Touch"}
            />
            <div className={style.containerContactsForm}>
                <form className={style.containerMessageForm}>
                    <h4>Message Me</h4>
                    <div className={style.containerForm}>
                        <div>
                            <input className={style.input} type={'text'} placeholder={'Name'}/>
                        </div>
                        <div>
                            <input className={style.input} type={'email'} placeholder={'Email'}/>
                        </div>
                        <div>
                            <input className={style.input} type={'text'} placeholder={'Subject'}/>
                        </div>
                        <div>
                            <textarea className={style.textarea} placeholder={'Message'}/>
                        </div>
                        <div>
                            <button className={style.button}>Send Message</button>
                        </div>
                    </div>

                    {/*<input className={style.input} type={'text'} placeholder={'Name'}/><br/>*/}
                    {/*<input className={style.input} type={'email'} placeholder={'Email'}/><br/>*/}
                    {/*<input className={style.input} type={'text'} placeholder={'Subject'}/><br/>*/}
                    {/*<textarea className={style.textarea} placeholder={'Message'}/><br/>*/}
                    {/*<button className={style.button}>Send Message</button>*/}
                </form>
                <div className={style.containerContactsInfo}>
                    <h4>Contact Info</h4>
                    <p>Always available for freelance<br/>
                        work if the right project comes along,<br/>
                        Feel free to contact me!<br/>
                    </p>
                    <ul className={style.containerContacts}>
                        <li>
                            <div>
                                <span><i className={style.icon}></i></span>
                                <div>
                                    <h6>Name</h6>
                                    <span>Yegor Gursky</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span><i className={style.icon}></i></span>
                                <div>
                                    <h6>Location</h6>
                                    <span>Minsk, Belarus</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span><i className={style.icon}></i></span>
                                <div>
                                    <h6>Call Me</h6>
                                    <span>
                                        <a href={"tel: +37544 000 0000"}>+37544 000 0000</a>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span><i className={style.icon}></i></span>
                                <div>
                                    <h6>Email Me</h6>
                                    <span>
                                        <a href={"mailto:gurskygursky@example.com"}>
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

