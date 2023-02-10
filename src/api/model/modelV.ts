export const modelCreateV = {
    markId: {
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
                min: 3,
                max: 15,
            }
        }
    },
}

export const modelEditV = {
    id: {
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
                min: 3,
                max: 15,
            }
        }
    }
}

export const modelDelV = {
    id: {
        type: 'number',
        require: true,
        reference: {
            ID: true,
        }
    }
}

export const modelFindV = {
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
