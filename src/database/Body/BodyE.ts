import { Schema } from 'nd-srv';

export interface BodyI {
    id: number
    name: string
    modelId: number
}

export const BodySchemeInsert: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 20,
            }
        }
    },
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export const BodySchemeUpdate: Schema = {
    name: {
        type: 'string',
        reference: {
            length: {
                min: 3,
                max: 20,
            }
        }
    },
    modelId: {
        type: 'number',
        reference: {
            ID: true,
        }
    }
}
