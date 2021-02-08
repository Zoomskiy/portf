import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

type dataType ={
    id: number
    skillTitle: string
    skillIcon: string
}
const data: Array<dataType> = [
    {id: 1, skillTitle: "HTML5", skillIcon:"https://img.icons8.com/color/48/000000/html-5.png"},
    {id: 2, skillTitle: "CSS", skillIcon:"https://img.icons8.com/color/48/000000/css3.png"},
    {id: 3, skillTitle: "JavaScript", skillIcon:"https://img.icons8.com/color/48/000000/javascript.png"},
    {id: 4, skillTitle: "ReactJS", skillIcon:"https://img.icons8.com/color/48/000000/react-native.png"},
    {id: 5, skillTitle: "Redux", skillIcon:"https://img.icons8.com/color/48/000000/redux.png"},
    {id: 6, skillTitle: "Git", skillIcon:"https://img.icons8.com/color/48/000000/git.png"},
]

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    {data.map((el:dataType) => <Skill key={el.id} title={el.skillTitle} iconPath={el.skillIcon}/> )}
                </div>
            </div>
        </div>
    );
}


export default Skills;
