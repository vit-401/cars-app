import axios, {AxiosResponse} from 'axios'
import {CarType, engineTypes} from "../app/app-reduser";

const instance = axios.create({
    baseURL: 'https://test-backend.esverito.com/',
    withCredentials: false
})

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
    deleteCar(id: number): Promise<AxiosResponse> {
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




