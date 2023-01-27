import { Schema } from 'nd-srv';

export interface ModificationEntity {
    id: number
    name: string
}

export const modificationRules: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            min: 10,
            max: 15,
        }
    }
}
