import { Schema } from 'nd-srv';

export interface CarI {
    id: number
    modificationId: number
    bodyId: number
    engineId: number
}

export const CarSchemeInsert: Schema = {
    modificationId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
}
