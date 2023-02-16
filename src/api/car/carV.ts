import { Schema } from 'nd-srv';

export const carCreateV: Schema = {
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

export const setRefillV: Schema = {
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
        type: 'string',
        require: true,
        // reference: {
        //     match: /^\d{4}-([0-1][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/,
        // }
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
