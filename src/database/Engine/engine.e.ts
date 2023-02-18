import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface Engine {
    id: number
    name: string
    volume: number
    horsepower: number
    mediumExpense: Decimal
    markId: number
}

export interface EngineInsert {
    name: string
    volume: number
    horsepower: number
    mediumExpense: number
    markId: number
}
export const engineInsert: Schema = {
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

export interface EngineUpdate {
    name?: string
    volume?: number
    horsepower?: number
    mediumExpense?: number
    markId?: number
}
export const engineUpdate: Schema = {
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
