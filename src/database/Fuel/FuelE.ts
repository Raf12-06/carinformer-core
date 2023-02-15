import { Schema } from 'nd-srv';

export interface FuelI {
    id: number
    name: string
}

export const FuelSchemeInsert: Schema = {
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

export const FuelSchemeUpdate: Schema = {
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
