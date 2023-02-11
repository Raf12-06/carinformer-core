export const modificationCreateV = {
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2,
                max: 15,
            }
        }
    },
}

export const modificationEditV = {
    id: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    },
    modelId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2,
                max: 15,
            }
        }
    }
}

export const modificationDelV = {
    id: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export const modificationFindV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2,
                max: 15,
            }
        }
    }
}
