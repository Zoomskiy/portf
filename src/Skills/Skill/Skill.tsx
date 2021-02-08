import React from 'react';
import s from './Skill.module.css'

type skillPropsType = {
    title: string
    iconPath: string
}


const Skill = (props: skillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img alt={"skill smt"} src={props.iconPath}/>
            </div>
            <h3>{props.title}</h3>

        </div>
    );
}

export default Skill;
