export const markCreateV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 15,
            }
        }
    },
}

export const markEditV = {
    id: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 1
            }
        }
    },
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 15,
            }
        }
    }
}

export const markDelV = {
    id: {
        type: 'number',
        require: true,
        reference: {
            length: {
                min: 1
            }
        }
    }
}

export const markFindV = {
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
