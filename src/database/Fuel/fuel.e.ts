import { Schema } from 'nd-srv';

export interface Fuel {
    id: number
    name: string
}

export interface FuelInsert {
    name: string
}
export const fuelInsert: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 10,
            }
        }
    }
}

export interface FuelUpdate {
    name?: string
}
export const fuelUpdate: Schema = {
    name: {
        type: 'string',
        reference: {
            length: {
                min: 3,
                max: 10,
            }
        }
    }
}
