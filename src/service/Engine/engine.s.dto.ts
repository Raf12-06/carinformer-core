import { Schema } from 'nd-srv';

export interface EngineCreateServiceDto {
    name: string
    volume: number
    horsepower: number
    mediumExpense: number
    markId: number
}
export const engineCreateServiceDto: Schema = {
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

export interface EngineEditServiceDto {
    name?: string
    volume?: number
    horsepower?: number
    mediumExpense?: number
    markId?: number
}
export const engineEditServiceDto: Schema = {
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

export interface EngineDelServiceDto {}
export const engineDelServiceDto: Schema = {}
