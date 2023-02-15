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
}
