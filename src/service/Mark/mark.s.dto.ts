import { Schema } from 'nd-srv';

export interface MarkCreateServiceDto {
    name: string
}
export const markCreateServiceDto: Schema = {
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

export interface MarkEditServiceDto {
    name?: string
}
export const markEditServiceDto: Schema = {
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
