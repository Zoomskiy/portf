import React from 'react';
import c from './Contact.module.css'
import style from '../common/styles/Container.module.css'


const Contact = () => {
    return (
        <div className={c.contactBlock}>
            <div className={`${style.container} ${c.contactContainer}`}>
                <h2>Контакты</h2>
                <form className={c.contacts}>
                    <div className={c.formInputs}>
                        <input placeholder={"Имя"} type="text"/>
                        <input placeholder={"E-mail"} type="text"/>
                        <textarea placeholder={"Ваше сообщение"}/>
                    </div>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contact;