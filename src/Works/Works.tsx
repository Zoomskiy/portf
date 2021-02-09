import React from 'react';
import w from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {v1} from "uuid";
import Work from "./Work/Work";

type dataType = {
    id: string
    workTitle: string
    workDescription: string
    imageWork: string
    urls: string
}
const data: Array<dataType> = [
    {
        id: v1(),
        workTitle: "Social Network",
        workDescription: "SN, project where practice with REACT, REDUX, REACT-REDUX, etc.",
        imageWork: "http://placehold.it/255",
        urls: "https://github.com/Zoomskiy/socialNetworkPractice"
    },
    {
        id: v1(),
        workTitle: "TodoList",
        workDescription: "One of the million version TDL, practice win REACT, REDUX, etc.",
        imageWork: "http://placehold.it/255",
        urls: "https://github.com/Zoomskiy/TDL"
    },
    {
        id: v1(),
        workTitle: "Course homework's",
        workDescription: "Homework's from programming course's. Practise with React, Redux's, etc.",
        imageWork: "http://placehold.it/255",
        urls: "https://github.com/Zoomskiy/homework"
    },
]

const Works = () => {
    return (
        <div className={w.worksBlock}>
            <div className={`${styleContainer.container} ${w.worksContainer}`}>
                <div className={w.title}>
                    <h2>My works</h2>
                </div>
                <div className={w.works}>
                    {data.map((el: dataType) => <Work title={el.workTitle} description={el.workDescription}
                                                      iconPath={el.imageWork} urls={el.urls}/>)}
                </div>
            </div>
        </div>
    );
}


export default Works;
