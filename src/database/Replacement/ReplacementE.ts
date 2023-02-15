import { Schema } from 'nd-srv';

export interface ReplacementI {
    id: number
    carId: number
    replacementTypeId: number
    km: number
    payment: number
    oil: string
    date: string | Date
    desc: string
}

export const ReplacementSchemeInsert: Schema = {
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    replacementTypeId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    km: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    payment: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    oil: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 255,
            }
        },
    },
    date: {
        type: 'string',
        default: '2023-02-15',
        reference: {
            match: /^\d{4}-([0-1][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/,
        }
    },
    desc: {
        type: 'string',
        reference: {
            length: {
                max: 255,
            }
        }
    }
}
