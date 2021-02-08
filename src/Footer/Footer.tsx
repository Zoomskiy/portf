import React from "react";
import f from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={f.footerBlock}>
            <div className={f.container}>
                <h3>Alexander Sindetckiy</h3>
                <ul className={f.footer}>
                    <li><a href={"#"}>GitHub</a></li>
                    <li><a href={"#"}>Gmail</a></li>
                    <li><a href={"#"}>LinkedIn</a></li>
                    <li><a href={"#"}>Something</a></li>
                </ul>
                <p>© 2021 All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer