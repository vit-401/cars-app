import {appAPI} from "../api/app-api";


export type CarType = {
    brand: string
    carNumber: string
    engineType: engineType
    id: number
    model: string
}
const initialState: StateType = {
    cars: [],
    currentCar: null
}
export type StateType = {
    cars: CarType[]
    currentCar: CarType | null
}
export const appReduser = (state = initialState, action: ActionsType): StateType => {
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

        default:
            return state
    }
}

// actions
export const setCurrentCar = (car: CarType | null) => ({type: 'SET_CAR', car} as const)
export const setCars = (cars: CarType[]) => ({type: 'SET_CARS', cars} as const)
export const sortAC = (field: keyof CarType) => ({type: 'SORT', field} as const)
export const deleteCarAC = (id: number) => ({type: 'DELETE-CAR', id} as const)
export const addNewCarAC = (brand: string,
                            carNumber: string,
                            engineType: engineType,
                            id: number,
                            model: string) => ({
    type: 'ADD-NEW-CAR',
    brand,
    carNumber,
    engineType,
    id,
    model
} as const)


export const getCarById = (id: number) => async (dispatch: any) => {
    const currentCar = await appAPI.getCarById(id)
    dispatch(setCurrentCar(currentCar))
}

export const getCars = () => async (dispatch: any) => {
    const cars = await appAPI.getCars()
    dispatch(setCars(cars))
}


//types

export type SortACType = ReturnType<typeof sortAC>
export type DeleteCarACType = ReturnType<typeof deleteCarAC>
export type AddNewCarACType = ReturnType<typeof addNewCarAC>
export type SetCurrentCar = ReturnType<typeof setCurrentCar>
export type SetCars = ReturnType<typeof setCars>
type ActionsType = SortACType
    | DeleteCarACType
    | AddNewCarACType
    | SetCars
    | SetCurrentCar


type engineType = "FUEL" | "GAS" | "HYBRID"

