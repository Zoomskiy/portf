import React from 'react';
import w from './Work.module.css'

type workPropsType = {
    title: string
    description: string
    iconPath: string
    urls: string
}


const Work = (props: workPropsType) => {
    return (
        <div className={w.work}>
            <div className={w.icon}>
                <a href={"#"}><button>View</button></a>
            </div>
            <div className={w.description}>
                <a href={props.urls} target="_blank">
                    <h3>{props.title}</h3>
                    <h4>{props.description}</h4>
                </a>
            </div>
        </div>
    );
}

export default Work;