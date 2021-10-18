import React from "react";
import style from './Skills.module.css';
import {Skill} from "./skill/Skill";
import {Header} from "../../common/header/Header";


export const Skills = () => {
    return (
        <div className={style.content}>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <div className={style.skillSection}>
                <Skill title={'HTML/CSS'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                />
                <Skill title={'Web Design'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                />
                <Skill title={'JavaScript'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                />
                <Skill title={'React JS'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                       className={style.item}
                />
                <Skill title={'TypeScript'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                       className={style.item}
                />
                <Skill title={'Express.js'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                       '                            Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'}
                       className={style.item}
                />
            </div>
        </div>
    );
}

