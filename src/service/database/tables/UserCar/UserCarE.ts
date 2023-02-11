import { Schema } from 'nd-srv';

export interface UserCarI {
    id: number
    userId: number
    carId: number
}

export const UserCarSchemeInsert: Schema = {
    userId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        },
    },
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        },
    }
}

export const UserCarSchemeUpdate: Schema = {
    userId: {
        type: 'number',
        reference: {
            ID: true
        },
    },
    carId: {
        type: 'number',
        reference: {
            ID: true
        },
    }
}
