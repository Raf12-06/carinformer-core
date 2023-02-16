import { Schema } from 'nd-srv';

export interface CarI {
    id: number
    modificationId: number
    bodyId: number
    engineId: number
    km: number
}

export const CarSchemeInsert: Schema = {
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

export const CarSchemeUpdate: Schema = {
    modificationId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    bodyId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    engineId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    km: {
        type: 'number',
        reference: {
            length: {
                min: 0
            }
        }
    }
}
