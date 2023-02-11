import { Schema } from 'nd-srv';

export interface BodyI {
    id: number
    name: string
}

export const BodyScheme: Schema = {
    name: {
        type: 'string',
        reference: {
            min: 3,
            max: 15,
        }
    }
}
