import { Schema } from 'nd-srv';

export interface CarI {
    id: number
    markId: number
    modelId: number
    modificationId: number
    bodyId: number
    engineId: number
}

export const CarSchemeInsert: Schema = {
    markId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    },
    modelId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    },
    modificationId: {
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
    },
    engineId: {
        type: 'number',
        require: true,
        reference: {
            ID: true
        }
    },
}

export const CarSchemeUpdate: Schema = {
    markId: {
        type: 'number',
        reference: {
            ID: true
        }
    },
    modelId: {
        type: 'number',
        reference: {
            ID: true
        }
    },
    modificationId: {
        type: 'number',
        reference: {
            ID: true
        }
    },
    bodyId: {
        type: 'number',
        reference: {
            ID: true
        }
    },
    engineId: {
        type: 'number',
        reference: {
            ID: true
        }
    },
}
