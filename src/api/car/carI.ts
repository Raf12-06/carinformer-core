import { CarI } from '../../database/Car/CarE';
import { RefillI } from '../../database/Refill/RefillE';

export namespace Car {

    export namespace get {

        export const url = '/api/car';

        export interface Request {
        }

        export interface Response {
            car: CarI | null
        }
    }

    export namespace create {

        export const url = '/api/car/create';

        export interface Request {
            modificationId: number
            bodyId: number
            engineId: number
            km: number
        }

        export interface Response {
            car: CarI
        }
    }

    export namespace setRefill {
        export const url = '/api/car/set-refill';

        export interface Request {
            carId: number
            km: number
            payment: number
            liter: number
            price: number
            fuelId: number
            date: string
            desc: string
        }

        export interface Response {
            refill: RefillI
        }
    }
}
