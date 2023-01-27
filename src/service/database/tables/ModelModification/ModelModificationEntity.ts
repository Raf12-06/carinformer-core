import { Schema } from 'nd-srv';

export interface ModelModificationEntity {
    id: number
    modificationId: number
    modelId: number
}

export const modelModificationRules: Schema = {
    modificationId: {
        type: 'number',
        require: true
    },
    modelId: {
        type: 'number',
        require: true
    }
}
