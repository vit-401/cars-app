import axios, {AxiosResponse} from 'axios'
import {CarType, engineTypes} from "../app/app-reduser";

const instance = axios.create({
    baseURL: 'https://test-backend.esverito.com/',
    withCredentials: false,


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
    getCars(): Promise<AxiosResponse<{ cars: [CarType] }>> {
        return instance.get('api/car')
    },
    getCarById(id: number): Promise<AxiosResponse<{ car: CarType }>> {
        return instance.get(`api/car/${id}`)
    },
    postCar(brand: string, carNumber: string, engineType: engineTypes, model: string): Promise<AxiosResponse<{ car: CarType }>> {
        return instance.post('api/car', {
            brand,
            carNumber,
            engineType,
            model
        })
    },
    deleteCar(id: number): Promise<AxiosResponse<any>> {
        return instance.delete(`api/car/${id}`)
    },
    updateCar(id: number, brand: string, carNumber: string, engineType: engineTypes, model: string): Promise<AxiosResponse<{ car: CarType }>> {
        return instance.put(`api/car/${id}`, {
            brand,
            carNumber,
            engineType,
            model
        })
    },
}




