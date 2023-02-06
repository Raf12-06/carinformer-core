import { Schema } from 'nd-srv';

export interface MarkI {
    id: number
    name: string
}

export const MarkScheme: Schema = {
    name: {
        type: 'string',
        reference: {
            min: 3,
            max: 15,
        }
    }
};
