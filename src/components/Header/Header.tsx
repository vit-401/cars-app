import React from "react";
import style from './Header.module.css'
import logo from '../../common/img/icons/carIcon.svg'
import goOutIcon from '../../common/img/icons/goOutIcon.png'

export function Header() {
    return <header className={style.header}>
        <div className={"container"}>
            <div className={style.headerInner}>
                <div className={style.headerItem}>
                    <img src={logo} alt=""/>
                </div>
                <div className={style.headerItem}>
                    <div className="headerTitle">Username</div>
                    <button className={style.goOut}>
                        <img  src={goOutIcon} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    </header>;
}