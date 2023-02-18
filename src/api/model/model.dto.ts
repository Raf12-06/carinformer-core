import { Schema } from 'nd-srv';

export interface ModelGetDto {}
export const modelGetDto: Schema = {}

export interface ModelCreateDto {
    markId: number
    name: string
}
export const modelCreateDto: Schema = {
    markId: {
        type: 'number',
        require: true,
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
    },
}

export interface ModelEditDto {
    modelId: number
    name: string
    markId?: number
}
export const modelEditDto: Schema = {
    modelId: {
        type: 'number',
        require: true,
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

export interface ModelDelDto {
    modelId: number
}
export const modelDelDto: Schema = {
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export interface ModelFindDto {
    name: string
}
export const modelFindDto: Schema = {
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
