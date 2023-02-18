import { Schema } from 'nd-srv';

export interface ModificationGetDto {}
export const modificationGetDto: Schema = {}

export interface ModificationCreateDto {
    modelId: number
    name: string
}
export const modificationCreateDto: Schema = {
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
                min: 2,
                max: 15,
            }
        }
    },
}

export interface ModificationEditDto {
    modificationId: number
    name: string
    modelId?: number
}
export const modificationEditDto: Schema = {
    modificationId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
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
                min: 2,
                max: 15,
            }
        }
    }
}

export interface ModificationDelDto {
    modificationId: number
}
export const modificationDelDto: Schema = {
    modificationId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export interface ModificationFindDto {
    name: string
}
export const modificationFindDto: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2,
                max: 15,
            }
        }
    }
}
