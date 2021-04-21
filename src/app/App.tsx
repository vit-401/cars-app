import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {ListCar} from "../components/ListCar/ListCar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {Prealoder} from "../common/prealoder/Prealoader";

export const App = React.memo(() => {
    let loading = useSelector<AppRootStateType>(state => state.cars.preloader)

    return <div className={"app"}>
        {loading ? <Prealoder/> : null}
        <Header/>
        <ListCar/>
    </div>
})

