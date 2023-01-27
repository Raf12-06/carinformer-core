import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface EngineEntity {
    id: number
    name: string
    volume: number
    horsepower: number
    mediumExpense: Decimal
}

export const engineRules: Schema = {
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
    volume: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 10
            }
        }
    },
    horsepower: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 1000
            }
        }
    },
    medium_expense: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 100
            }
        }
    }
}
