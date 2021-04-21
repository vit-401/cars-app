import React from "react";
import style from './Header.module.css'
import logo from '../../assets/img/icons/carIcon.svg'
import goOutIcon from '../../assets/img/icons/goOutIcon.png'

export const Header = React.memo(() => {
    return <header className={style.header}>
        <div className={"container"}>
            <div className={style.headerInner}>
                <div className={style.headerItem}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.headerItem}>
                    <div className="headerTitle">Username</div>
                    <button className={style.goOut}>
                        <img src={goOutIcon} alt="go-out"/>
                    </button>
                </div>
            </div>
        </div>
    </header>;
})