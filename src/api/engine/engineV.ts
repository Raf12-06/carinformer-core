export const engineCreateV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2,
                max: 20,
            }
        },
    },
    volume: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 10000,
            }
        }
    },
    horsepower: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 0,
                max: 2000,
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
    }
}

export const engineEditV = {
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        reference: {
            length: {
                min: 2,
                max: 20,
            }
        },
    },
    volume: {
        type: 'number',
        reference: {
            length: {
                min: 0,
                max: 1000,
            }
        }
    },
    horsepower: {
        type: 'number',
        reference: {
            length: {
                min: 0,
                max: 2000,
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
    }
}

export const engineDelV = {
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export const engineFindV = {
    name: {
        type: 'string',
        reference: {
            length: {
                min: 2,
                max: 20,
            }
        },
    }
}
