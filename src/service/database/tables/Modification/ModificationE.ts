import { Schema } from 'nd-srv';

export interface ModificationI {
    id: number
    modelId: number
    name: string
}

export const ModificationScheme: Schema = {
    modelId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            min: 3,
            max: 15,
        }
    }
}
