import { Schema } from 'nd-srv';

export interface ModelI {
    id: number
    markId: number
    name: string
}

export const ModelSchemeInsert: Schema = {
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

export const ModelSchemeUpdate: Schema = {
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
