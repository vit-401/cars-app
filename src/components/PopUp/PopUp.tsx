import React, {useEffect} from "react";
import style from "./PopUp.module.css";
import clearPopup from "../../common/img/icons/clearPopUpIcon.png"
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {addNewCarAC, CarType, getCarById, setCurrentCar} from "../../app/app-reduser";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../app/store";

type FormikErrorType = {
    brand?: string
    model?: string
    carNumber?: string
    engineType?: string
}


export type PopUpPropsType = {
    closePopup?: (s: boolean) => void
    id?: number
    status: "EDIT" | "ADD"
}

export const PopUp: React.FC<PopUpPropsType> = (props) => {

    const {id} = useParams<{id: string}>()
    let title = id ? 'EDIT CAR INFORMATION' :  'ADD A NEW CAR'
    const currentCar = useSelector<AppRootStateType, CarType | null>(state => state.cars.currentCar)
    useEffect(() => {
        if(id){
            dispatch(getCarById(+id))
        }
        return () => {
            dispatch(setCurrentCar(null))
        }
    }, [id])

    useEffect(() => {
        if(currentCar){
            formik.setFieldValue('brand', currentCar.brand)
            formik.setFieldValue('model', currentCar.model)
            formik.setFieldValue('carNumber', currentCar.carNumber)
            formik.setFieldValue('engineType', currentCar.engineType)
        }
    }, [currentCar])
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            brand: currentCar?.brand,
            model: currentCar?.model,
            carNumber: currentCar?.carNumber,
            engineType: currentCar?.engineType
        },
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.brand) {
                errors.brand = "Required"
            }
            if (!values.engineType) {
                errors.engineType = "Required"
            }
            if (!values.model) {
                errors.model = "Required"
            }
            if (!values.carNumber) {
                errors.carNumber = "Required"
            }
            return errors;
        },
        onSubmit: (values: any) => {
            alert(JSON.stringify(values))
            if(id){
                //update
            } else {
                dispatch(addNewCarAC(values.brand, values.carNum, values.engType, 123, values.model))
            }
            formik.resetForm()
        },
    })

    let closePopup = () => {
        props.closePopup &&
        props.closePopup(false)
    }
    return <div className={style.popUp}>
        <form onSubmit={formik.handleSubmit}>
            <div className={style.popupInner}>
                <h2 className={style.popupTitle}>{title}</h2>
                <button onClick={closePopup}><img src={clearPopup} alt=""/></button>
            </div>
            <div>
                {
                    formik.touched.brand &&
                    formik.errors.brand ? <div style={{color: 'red'}}>{formik.errors.brand}</div> : null
                }
                {
                    formik.touched.engineType &&
                    formik.errors.engineType ? <div style={{color: 'red'}}>{formik.errors.engineType}</div> : null
                }
                {
                    formik.touched.carNumber &&
                    formik.errors.carNumber ? <div style={{color: 'red'}}>{formik.errors.carNumber}</div> : null
                }
                {
                    formik.touched.model &&
                    formik.errors.model ? <div style={{color: 'red'}}>{formik.errors.model}</div> : null
                }
                <div className={style.popupItem}>
                    <input type="text"
                           {...formik.getFieldProps('brand')}
                           placeholder={"Brand"}/>
                    <input type="text"
                           {...formik.getFieldProps('model')}
                           placeholder={"Model"}/>
                </div>
                <div className={style.popupItem}>
                    <input type="text"
                           {...formik.getFieldProps('carNumber')}
                           placeholder={"Car Number"}/>
                    <input type="text"
                           {...formik.getFieldProps('engineType')}
                           placeholder={"Engine Type"}/>
                </div>
            </div>
            <div className={style.popupBts}>
                <button onClick={closePopup}>cancel</button>
                <button type="submit">oK</button>
            </div>

        </form>
    </div>
}