import { Schema } from 'nd-srv';

export interface CarCreateServiceDto {
    modificationId: number
    bodyId: number
    engineId: number
    km: number
}
export const carCreateServiceDto: Schema = {
    modificationId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    km: {
        type: 'number',
        default: 0,
        reference: {
            length: {
                min: 0
            }
        }
    }
}

export interface CarSetRefillServiceDto {
    carId: number
    km: number
    payment: number
    liter: number
    price: number
    fuelId: number
    date: Date
    desc: string
}
export const carSetRefillServiceDto: Schema = {
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

export interface CarSetReplacementServiceDto {
    carId: number
    replacementTypeId: number
    km: number
    payment: number
    oil: string
    date: Date
    desc: string
}
export const carSetReplacementServiceDto: Schema = {
    carId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    replacementTypeId: {
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
            ID: true,
        },
    },
    payment: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        },
    },
    oil: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 255,
            }
        },
    },
    date: {
        type: 'Date',
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
