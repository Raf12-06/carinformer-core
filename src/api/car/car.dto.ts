import { Schema } from 'nd-srv';

export interface CarGetDto {}
export const carGetDto: Schema = {}

export interface CarCreateDto {
    modificationId: number
    bodyId: number
    engineId: number
    km: number
}
export const carCreateDto: Schema = {
    modificationId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    engineId: {
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
            length: {
                min: 0
            }
        }
    }
}

export interface CarSetRefillDto {
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: Date
    desc: string
}
export const carSetRefillDto: Schema = {
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
            length: {
                min: 0
            }
        }
    },
    payment: {
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
            length: {
                min: 0
            }
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
    fuelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    date: {
        type: 'Date',
    },
    desc: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 255
            }
        }
    }
}
