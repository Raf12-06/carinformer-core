import { Schema } from 'nd-srv';
import { Decimal } from '@prisma/client/runtime';

export interface Refill {
    id?: number
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: Date
    desc: string
    expense: Decimal
}

export interface RefillInsert {
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: Date
    desc: string
    expense: number
}
export const refillInsert: Schema = {
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
        type: 'Date',
        default: new Date()
    },
    desc: {
        type: 'string',
        require: true,
        reference: {
            length: {
                max: 255,
            }
        }
    },
    expense: {
        type: 'number',
        default: 0,
        reference: {
            length: {
                min: 0
            }
        }
    }
}

export interface RefillUpdate {
    carId?: number
    km?: number
    payment?: number
    liter?: number
    price?: number
    fuelId?: number
    date?: Date
    desc?: string
    expense?: number
}
export const refillUpdate: Schema = {
    carId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    km: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    payment: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    price: {
        type: 'number',
        reference: {
            length: {
                min: 0
            }
        }
    },
    liter: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    fuelId: {
        type: 'number',
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
