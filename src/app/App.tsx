import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {ListCar} from "../components/ListCar/ListCar";

function App() {
    return <div className={"app"}>
        <Header/>
        <ListCar/>
    </div>
}

export default App;
