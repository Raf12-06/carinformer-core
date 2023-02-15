import { Schema } from 'nd-srv';

export interface ModificationI {
    id: number
    modelId: number
    name: string
}

export const ModificationSchemeInsert: Schema = {
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
            length: {
                min: 3,
                max: 15,
            }
        }
    }
}

export const ModificationSchemeUpdate: Schema = {
    modelId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        reference: {
            length: {
                min: 3,
                max: 15,
            }
        }
    }
}
