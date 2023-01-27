import { Schema } from 'nd-srv';

export interface MarkEntity {
    id: number
    name: string
    description: string
}

export const markRules: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 10,
                max: 15,
            }
        }
    },
    description: {
        type: 'string',
        require: true,
        reference: {
            min: 10,
            max: 255,
        }
    }
};
