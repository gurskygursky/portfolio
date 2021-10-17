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
                <Skill title={'JavaScript'}
                       description={'text'}
                />
                <Skill title={'React'}
                       description={'text'}
                />
                <Skill title={'CSS'}
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

