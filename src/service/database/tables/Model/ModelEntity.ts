import { Schema } from 'nd-srv';

export interface ModelEntity {
    id: number
    name: string
}

export const modelRules: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            min: 10,
            max: 15,
        }
    }
}
