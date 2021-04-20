import React, {ChangeEventHandler, useCallback, useEffect, useState} from "react";
import style from "./ListCar.module.css";
import rightArr from '../../common/img/icons/dropRightArrow.png'
import leftArr from '../../common/img/icons/dropLeftArrow.png'
import {ItemCar} from "./ItemCar/ItemCar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {CarType, getCars, sortAC} from "../../app/app-reduser";
import {PopUp} from "../PopUp/PopUp";
import {NavLink, Route, useHistory} from "react-router-dom";


export const ListCar = React.memo(() => {

    let [status, setStatusPopup] = useState<any>('ADD')
    let dataCars = useSelector<AppRootStateType, CarType[]>((state) => state.cars.cars)
    const dispatch = useDispatch()
    const history = useHistory()

    const changeSortValue: ChangeEventHandler<HTMLSelectElement> = useCallback(
        (e) => {
            let value: any = e.currentTarget.value
            dispatch(sortAC(value))
        }, [])

    useEffect(() => {
        dispatch(getCars())
    }, [])

    const closePopUp = useCallback(() => {
        history.push('/')
    }, [])

    return <section className={style.listCar}>


        <div className="container">
            <div className={style.listCarInner}>
                <h1 className={style.listCarTitle}>CAR LIST</h1>
                <div className="sort">
                    <span>sort by: </span>
                    <select onChange={changeSortValue}>
                        <option value="id">id</option>
                        <option value="brand">brand</option>
                        <option value="carNumber">car-number</option>
                        <option value="engineType">engine-type</option>
                        <option value="model">model</option>
                    </select>
                </div>

                <NavLink to={'/car'}>
                    <button className={style.addCar}>ADD CAR</button>
                </NavLink>
            </div>
            <div className={style.listCarSpace}>
                <ul className={style.listCarColumnTitles}>
                    <li>Brand</li>
                    <li>Car Number</li>
                    <li>Engine Type</li>
                    <li>Model</li>
                    <li>Actions</li>
                </ul>
                <ul className={style.listCarColumn}>
                    {dataCars.map((i: any) => {
                        return <ItemCar key={i.id}
                                        brand={i.brand}
                                        carNumber={i.carNumber}
                                        engineType={i.engineType}
                                        model={i.model}
                                        id={i.id}
                                        setStatusPopup={setStatusPopup}
                        />
                    })}

                </ul>
                <div className={style.listCarBottom}>
                    <div className={style.pageOfApp}>
                        <div className={style.select}>
                            <span>Lines on page:  </span>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="numberOfPage">
                            1-5 out of 5
                        </div>
                        <div className={style.pagesControlArea}>
                            <button><img src={leftArr} alt="leftArr"/></button>
                            <button><img src={rightArr} alt="rightArr"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Route path={'/car/:id?'} render={() => <PopUp status={status} closePopup={closePopUp}/>}/>
    </section>
})