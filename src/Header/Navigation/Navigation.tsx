import React from 'react';
import n from './Navigation.module.css'
const Navigation = ()  => {
    return (
        <div  className={n.navigation}>
            <a href="#">Главная</a>
            <a href="#">Навыки</a>
            <a href="#">Проекты</a>
            <a href="#">Контакты</a>
        </div>
    );
}

export default Navigation;
