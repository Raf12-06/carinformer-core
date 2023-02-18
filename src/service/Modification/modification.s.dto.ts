import { Schema } from 'nd-srv';

export interface ModificationCreateServiceDto {
    modelId: number
    name: string
}
export const modificationCreateServiceDto: Schema = {
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

export interface ModificationEditServiceDto {
    modelId?: number
    name?: string
}
export const modificationEditServiceDto: Schema = {
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
