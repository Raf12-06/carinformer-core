import { Schema } from 'nd-srv';

export interface EngineI {
    id: number
    name: string
    volume: number
    horsepower: number
    mediumExpense: number
}

export const EngineScheme: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 5,
                max: 20,
            }
        }
    },
    volume: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 10,
            }
        }
    },
    horsepower: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 1000,
            }
        }
    },
    mediumExpense: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 100,
            }
        }
    }
}
