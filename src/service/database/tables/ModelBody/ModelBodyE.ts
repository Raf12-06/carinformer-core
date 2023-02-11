import { Schema } from 'nd-srv';

export interface ModelBodyI {
    id: number
    modelId: number
    bodyId: number
}

export const ModelBodyScheme: Schema = {
    modelId: {
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
}
