import { Schema } from 'nd-srv';

export interface CarEntity {
    id: number
    markModelId: number
    engineId: number
}

export const carRules: Schema = {
    markModelId: {
        type: 'number',
        require: true
    },
    engineId: {
        type: 'number',
        require: true
    }
}
