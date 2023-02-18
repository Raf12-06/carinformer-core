import { Schema } from 'nd-srv';

export interface Replacement {
    id: number
    carId: number
    replacementTypeId: number
    km: number
    payment: number
    oil: string
    date: Date
    desc: string
}

export interface ReplacementInsert {
    carId: number
    replacementTypeId: number
    km: number
    payment: number
    oil: string
    date: Date
    desc: string
}
export const replacementInsert: Schema = {
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

export interface ReplacementUpdate {
    carId?: number
    replacementTypeId?: number
    km?: number
    payment?: number
    oil?: string
    date?: Date
    desc?: string
}
export const replacementUpdate: Schema = {
    carId: {
        type: 'number',
        reference: {
            ID: true,
        },
    },
    replacementTypeId: {
        type: 'number',
        reference: {
            ID: true,
        },
    },
    km: {
        type: 'number',
        reference: {
            ID: true,
        },
    },
    payment: {
        type: 'number',
        reference: {
            ID: true,
        },
    },
    oil: {
        type: 'string',
        reference: {
            length: {
                min: 3,
                max: 255,
            }
        },
    },
    date: {
        type: 'Date',
        default: new Date(),
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
