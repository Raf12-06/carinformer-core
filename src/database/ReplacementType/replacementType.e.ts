import { Schema } from 'nd-srv';

export interface ReplacementType {
    id: number
    name: string
}

export const replacementTypeInsert: Schema = {
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
