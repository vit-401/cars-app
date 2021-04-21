import style from "../ListCar.module.css";
import createIcon from "../../../common/img/icons/CreateIcon.png";
import deleteIcon from "../../../common/img/icons/deleteIcon.png";
import React, {useCallback} from "react";
import {deleteCarTC} from "../../../app/app-reduser";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

export type ItemCarPropsType = {
    brand: string
    carNumber: string
    engineType: "FUEL" | "GAS" | "HYBRID"
    id: number
    model: string
    setStatusPopup: (s: string) => void
}

export const ItemCar: React.FC<ItemCarPropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    const deleteCar = useCallback(() => {
        dispatch(deleteCarTC(+props.id))
    }, [])


    return <li>
        <div className={style.carTitle}>{props.brand}</div>
        <div className={style.carTitle}>{props.carNumber}</div>
        <div className={style.carTitle}>{props.engineType}</div>
        <div className={style.carTitle}>{props.model}</div>
        <div className={style.actionIcons}>
            <div className={style.btnsWrap}>

                <NavLink to={`/car/${props.id}`}>
                    <button className={style.actionBtn}>
                        <img src={createIcon} alt="createIcon"/>
                    </button>
                </NavLink>
                <button className={style.actionBtn}
                        onClick={deleteCar}>
                    <img src={deleteIcon} alt="deleteIcon"/>
                </button>


            </div>
        </div>
    </li>;

})