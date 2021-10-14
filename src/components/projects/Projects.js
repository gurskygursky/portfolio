import React from "react";
import style from './Projects.module.css';

export const Projects = () => {
    return (
        <div className={style.container}>
            <div className={style.sectionHeader}>
                <p className={style.sectionDescription}>Showcasing some of my best work</p>
                <h2 className={style.sectionTitle}>Portfolio</h2>
            </div>
        </div>
    );
}

