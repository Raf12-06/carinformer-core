import { Schema } from 'nd-srv';

export interface BodyCreateServiceDto {
    name: string
    modelId: number
}
export const bodyCreateServiceDto: Schema = {
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

export interface BodyEditServiceDto {
    modelId: number
    name: string
}
export const bodyEditServiceDto: Schema = {
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

export interface BodyDelServiceDto {}
