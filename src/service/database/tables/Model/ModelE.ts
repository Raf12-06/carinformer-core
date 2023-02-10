import { Schema } from 'nd-srv';

export interface ModelI {
    id: number
    markId: number
    name: string
}

export const ModelScheme: Schema = {
    markId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            min: 3,
            max: 15,
        }
    }
};
