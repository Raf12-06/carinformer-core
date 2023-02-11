export const bodyCreateV = {
    name: {
        type: 'string',
        require: true,
        reference: {
            length: {
                min: 3,
                max: 10
            }
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

export const bodyAddBodyToModelV = {
    modeId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    },
    bodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export const bodyDelBodyFromModelV = {
    modelBodyId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}

export const bodyGetModelBodiesV = {
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    }
}
