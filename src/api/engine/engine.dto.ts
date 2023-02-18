import { Schema } from 'nd-srv';

export interface EngineGetDto {}
export const engineGetDto: Schema = {}

export interface EngineCreateDto {
    name: string
    volume: number
    horsepower: number
    mediumExpense: number
    markId: number
}
export const engineCreateDto: Schema = {
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

export interface EngineEditDro {
    engineId: number
    name?: string
    volume?: number
    horsepower?: number
    mediumExpense?: number
}
export const engineEditDto: Schema = {
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

export interface EngineDelDto {
    engineId: number
}
export const engineDelDto: Schema = {
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export interface EngineFindDto {
    name: string
}
export const engineFindDto: Schema = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 10,
            }
        }
    }
}
