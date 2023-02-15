import { Schema } from 'nd-srv';

export interface MarkI {
    id: number
    name: string
}

export const MarkSchemeInsert: Schema = {
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

export const MarkSchemeUpdate: Schema = {
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
