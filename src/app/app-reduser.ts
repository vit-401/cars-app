import {appAPI} from "../api/app-api";
import {Dispatch} from "redux";


export type CarType = {
    brand: string
    carNumber: string
    engineType: engineTypes
    id: number
    model: string
}
const initialState: StateType = {
    cars: [],
    currentCar: null,
    preloader: false
}
export type StateType = {
    cars: CarType[]
    currentCar: CarType | null
    preloader: boolean
}
export const appReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'SORT':
            let newCars = [...state.cars]
            return {
                ...state,
                cars: newCars.sort((a, b) => a[action.field] > b[action.field] ? 1 : -1)
            }
        case 'DELETE-CAR':
            return {
                ...state,
                cars: state.cars.filter(i => i.id !== action.id)
            }
        case "SET_CAR":
            return {
                ...state,
                currentCar: action.car
            }
        case "SET_CARS":
            return {
                ...state,
                cars: action.cars
            }
        case "ADD-NEW-CAR":
            return {
                ...state,
                cars: [...state.cars, action.newCar]
            }
        case 'UPDATE-CAR':
            return {
                ...state,
                cars: state.cars.map(c => c.id === action.updateCar.id ? {...c, ...action.updateCar} : c)
            }
        case 'LOADING':
            return {
                ...state,
                preloader: action.value
            }

        default:
            return state
    }
}

// actions
export const setCurrentCar = (car: CarType | null) => ({type: 'SET_CAR', car} as const)
export const setCars = (cars: CarType[]) => ({type: 'SET_CARS', cars} as const)
export const sortAC = (field: keyof CarType) => ({type: 'SORT', field} as const)
export const deleteCarAC = (id: number) => ({type: 'DELETE-CAR', id} as const)
export const addNewCarAC = (newCar: CarType) => ({type: 'ADD-NEW-CAR', newCar} as const)
export const updateCarAC = (updateCar: CarType) => ({type: 'UPDATE-CAR', updateCar} as const)
export const togglePreloader = (value: boolean) => ({type: 'LOADING', value} as const)


export const getCarById = (id: number) => async (dispatch: Dispatch) => {
    dispatch(togglePreloader(true))
    try {
        const res = await appAPI.getCarById(id)
        let currentCar = res.data.car
        dispatch(setCurrentCar(currentCar))
        dispatch(togglePreloader(false))

    } catch (err) {
        console.error(err)
        dispatch(togglePreloader(false))
    }
}

export const getCars = () => async (dispatch: Dispatch) => {
    dispatch(togglePreloader(true))
    try {
        const res = await appAPI.getCars()
        let cars = res.data.cars
        dispatch(setCars(cars))
        dispatch(togglePreloader(false))
    } catch (err) {
        console.error(err)
        dispatch(togglePreloader(false))
    }
}


export const deleteCarTC = (id: number) => async (dispatch: Dispatch) => {
    dispatch(togglePreloader(true))
    try {
        const res = await appAPI.deleteCar(id)
        if (res.status === 200) {
            dispatch(deleteCarAC(id))
            dispatch(togglePreloader(false))
        }
    } catch (err) {
        console.error(err)
        dispatch(togglePreloader(false))
    }
}

export const updateCarTC = (id: number,
                            brand: string,
                            carNumber: string,
                            engineType: engineTypes,
                            model: string) => async (dispatch: Dispatch) => {
    dispatch(togglePreloader(true))
    try {
        const res = await appAPI.updateCar(id, brand, carNumber, engineType, model)
        let updateCar = res.data.car
        dispatch(updateCarAC(updateCar))
        dispatch(togglePreloader(false))
    } catch (err) {
        console.error(err)
        dispatch(togglePreloader(false))
    }
}

export const postCar = (brand: string, carNumber: string, engineType: engineTypes, model: string) => async (dispatch: Dispatch) => {
    dispatch(togglePreloader(true))
    try {
        const res = await appAPI.postCar(brand, carNumber, engineType, model)
        let cars = res.data.car
        dispatch(addNewCarAC(cars))
        dispatch(togglePreloader(false))
    } catch (err) {
        console.error(err)
        dispatch(togglePreloader(false))
    }
}


//types

export type SortACType = ReturnType<typeof sortAC>
export type DeleteCarACType = ReturnType<typeof deleteCarAC>
export type AddNewCarACType = ReturnType<typeof addNewCarAC>
export type SetCurrentCar = ReturnType<typeof setCurrentCar>
export type SetCars = ReturnType<typeof setCars>
export type UpdateCars = ReturnType<typeof updateCarAC>
export type TooglePreloader = ReturnType<typeof togglePreloader>
type ActionsType = SortACType
    | DeleteCarACType
    | AddNewCarACType
    | SetCars
    | SetCurrentCar
    | UpdateCars
    | TooglePreloader


export type engineTypes = "FUEL" | "GAS" | "HYBRID"

