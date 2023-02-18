import { Schema } from 'nd-srv';

export interface Body {
    id: number
    name: string
    modelId: number
}

export interface BodyInsert {
    name: string
    modelId: number
}
export const bodyInsert: Schema = {
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

export interface BodyUpdate {
    name?: string
    modelId?: number
}
export const bodyUpdate: Schema = {
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
