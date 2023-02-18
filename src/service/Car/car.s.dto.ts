import { Schema } from 'nd-srv';

export interface CarCreateServiceDto {
    modificationId: number
    bodyId: number
    engineId: number
    km: number
}
export const carCreateServiceDto: Schema = {
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
