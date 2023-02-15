import { CarI } from '../../service/Car/CarE';

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
        }

        export interface Response {
            car: CarI
        }
    }
}
