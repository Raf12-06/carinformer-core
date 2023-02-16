import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface RefillI {
    id?: number
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: string | Date
    desc: string
    expense: number | Decimal
}

export const RefillSchemeInsert: Schema = {
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    km: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    payment: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    price: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0
            }
        }
    },
    liter: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    fuelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    date: {
        type: 'string',
        default: '2023-02-15',
        reference: {
            // match: /^\d{4}-([0-1][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/,
        }
    },
    desc: {
        type: 'string',
        reference: {
            length: {
                max: 255,
            }
        }
    },
    expense: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0
            }
        }
    }
}
