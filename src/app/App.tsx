import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {ListCar} from "../components/ListCar/ListCar";

export const App = React.memo( () => {
    return <div className={"app"}>
        <Header/>
        <ListCar/>
    </div>
})

