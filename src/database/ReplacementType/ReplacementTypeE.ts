import { Schema } from 'nd-srv';

export interface ReplacementTypeI {
    id: number
    name: string
}

export const ReplacementTypeSchemeInsert: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 255,
            }
        }
    }
}
