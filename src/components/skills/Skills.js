import React from "react";
import style from './Skills.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.content}>
            <div className={style.sectionHeading}>
                <p className={style.sectionDescription}>Check out my skills</p>
                <h2 className={style.sectionTitle}>Skills</h2>
            </div>
            <div className={style.skillSection}>
                <Skill className={style.item}
                       title={'JavaScript'}
                       description={'text'}
                />
                <Skill className={style.item}
                       title={'React'}
                       description={'text'}
                />
                <Skill className={style.item}
                       title={'CSS'}
                       description={'text'}
                />
                <Skill title={'Web Design'}
                       description={'text'}
                       className={style.item}
                />
                <Skill title={'Web Design'}
                       description={'text'}
                       className={style.item}
                />
                <Skill title={'Web Design'}
                       description={'text'}
                       className={style.item}
                />
            </div>
        </div>
    );
}

