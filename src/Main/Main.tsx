import React from 'react';
import m from './Main.module.css';
import styleContainer from "./../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={m.mainBlock}>
            <div className={m.container}>
                <div className={m.text}>
                    <span>Hi there</span>
                    <h1>I'm Alexander Sindetckiy</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={m.photo}>
                    <img alt={"my"} src="http://placehold.it/300x400"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
