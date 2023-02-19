import { Schema } from 'nd-srv';

export interface RefillDelLastDto {
    carId: number
}
export const refillDelLastDto: Schema = {
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export interface RefillFindFuelDto {
    name: string
}
export const refillFindFuelDto: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 10
            }
        }
    }
}
