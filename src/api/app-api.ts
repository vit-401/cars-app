import axios from 'axios'
import {CarType} from "../app/app-reduser";

const instance = axios.create({
    baseURL: 'https://test-backend.esverito.com/',
    withCredentials: true

})
const CARS: CarType[] = [
    {
        "id": 821,
        "carNumber": "jj",
        "model": "Jimny",
        "brand": "Jimny2",
        "engineType": "FUEL"
    },
    {
        "id": 825,
        "carNumber": "jj",
        "model": "Juke",
        "brand": "Juke01",
        "engineType": "FUEL"
    },
    {
        "id": 826,
        "carNumber": "jj",
        "model": "Juke",
        "brand": "Juke02",
        "engineType": "FUEL"
    },
    {
        "id": 827,
        "carNumber": "jj",
        "model": "Juke",
        "brand": "Juke45",
        "engineType": "FUEL"
    },
    {
        "id": 822,
        "carNumber": "jj",
        "model": "Jimny",
        "brand": "Jimny09",
        "engineType": "FUEL"
    },
    {
        "id": 816,
        "carNumber": "jjoo",
        "model": "Camry",
        "brand": "Camry",
        "engineType": "FUEL"
    },
    {
        "id": 828,
        "carNumber": "78SD78BJNL0-L",
        "model": "Juke",
        "brand": "some",
        "engineType": "FUEL"
    },
    {
        "id": 823,
        "carNumber": "jj",
        "model": "Juke",
        "brand": "Juke",
        "engineType": "GAS"
    },
    {
        "id": 829,
        "carNumber": "112233",
        "model": "Leaf",
        "brand": "Nissan",
        "engineType": "GAS"
    }
]
export const appAPI = {
    async getCars(): Promise<CarType[]> {
        return CARS
    },
    async getCarById(id: number): Promise<CarType> {
        return CARS.find(car => car.id === id) as CarType
    }
}

export type GetDataCarsType = {
    brand: string
    carNumber: string
    engineType: "FUEL" | "GAS" | "HYBRID"
    id: number
    model: string
}
