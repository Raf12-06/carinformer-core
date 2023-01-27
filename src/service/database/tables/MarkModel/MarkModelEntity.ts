import { Schema } from 'nd-srv';

export interface MarkModelEntity {
    id: number
    markId: number
    modelModificationId: number
}

export const markModelRules: Schema = {
    markId: {
        type: 'number',
        require: true
    },
    modelModificationId: {
        type: 'number',
        require: true
    }
}
