import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface EngineI {
    id: number
    name: string
    volume: Decimal | number
    horsepower: number
    mediumExpense: Decimal | number
}

export const EngineScheme: Schema = {
    name: {
        type: 'string',
        reference: {
            length: {
                min: 5,
                max: 20,
            }
        }
    },
    volume: {
        type: 'number',
        reference: {
            length: {
                min: 0,
                max: 50000,
            }
        }
    },
    horsepower: {
        type: 'number',
        reference: {
            length: {
                min: 0,
                max: 1000,
            }
        }
    },
    mediumExpense: {
        type: 'number',
        reference: {
            length: {
                min: 0,
                max: 100,
            }
        }
    }
}
