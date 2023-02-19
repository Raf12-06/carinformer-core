import { Schema } from 'nd-srv';

export interface RefillSetServiceDto {
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: Date
    desc: string
}
export const refillSetServiceDto: Schema = {
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
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
        type: 'Date',
        default: new Date()
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

export interface RefillAddFuelServiceDto {
    name: string
}
export const refillAddFuelServiceDto: Schema = {
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

export interface RefillFindFuelServiceDto {
    name: string
}
export const refillFindFuelServiceDto: Schema = {
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
