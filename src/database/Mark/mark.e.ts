import { Schema } from 'nd-srv';

export interface Mark {
    id: number
    name: string
}

export interface MarkInsert {
    name: string
}
export const markInsert: Schema = {
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

export interface MarkUpdate {
    name?: string
}
export const markUpdate: Schema = {
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
