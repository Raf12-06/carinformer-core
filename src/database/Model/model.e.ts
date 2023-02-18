import { Schema } from 'nd-srv';

export interface Model {
    id: number
    markId: number
    name: string
}

export interface ModelInsert {
    markId: number
    name: string
}
export const modelInsert: Schema = {
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
    }
};

export interface ModelUpdate {
    markId?: number
    name?: string
}
export const modelUpdate: Schema = {
    markId: {
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
};
