export const bodyCreateV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 20
            }
        }
    },
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export const bodyEditV = {
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 10
            }
        }
    },
    modelId: {
        type: 'number',
        reference: {
            ID: true,
        }
    }
}

export const bodyDelV = {
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export const bodyFindV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 2
            }
        }
    }
}
