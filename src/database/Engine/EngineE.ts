import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface EngineI {
    id: number
    name: string
    volume: Decimal | number
    horsepower: number
    mediumExpense: Decimal | number
    markId: number
}

export const EngineSchemeInsert: Schema = {
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
                max: 50000,
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
    },
    markId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export const EngineSchemeUpdate: Schema = {
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
    },
    markId: {
        type: 'number',
        reference: {
            ID: true
        }
    }
}
