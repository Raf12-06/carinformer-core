import { Schema } from 'nd-srv';

export interface MarkGetDto {}
export const markGetDto: Schema = {}

export interface MarkCreateDto {
    name: string
}
export const markCreateDto: Schema = {
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

export interface MarkEditDto {
    markId: number
    name: string
}
export const markEditDto: Schema = {
    markId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
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

export interface MarkDelDto {
    markId: number
}
export const markDelDto: Schema = {
    markId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export interface MarkFindDto {
    name: string
}
export const markFindDto: Schema = {
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
