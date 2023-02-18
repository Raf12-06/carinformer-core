import { Schema } from 'nd-srv';

export interface Modification {
    id: number
    modelId: number
    name: string
}

export interface ModificationInsert {
    modelId: number
    name: string
}
export const modificationInsert: Schema = {
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

export interface ModificationUpdate {
    modelId?: number
    name?: string
}
export const modificationUpdate: Schema = {
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
