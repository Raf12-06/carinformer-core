import { Schema } from 'nd-srv';

export interface BodyGetDto {}
export const bodyGetDto: Schema = {}

export interface BodyCreateDto {
    name: string
    modelId: number
}
export const bodyCreateDto: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 20
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

export interface BodyEditDto {
    bodyId: number
    name: string
    modelId: number
}
export const bodyEditDto: Schema = {
    bodyId: {
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
                max: 10
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

export interface BodyDelDto {
    bodyId: number
}
export const bodyDelDto: Schema = {
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export interface BodyFindDto {
    name: string
}
export const bodyFindDto: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2
            }
        }
    }
}
