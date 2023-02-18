import { Schema } from 'nd-srv';

export interface ModelCreateServiceDto {
    markId: number
    name: string
}
export const modelCreateServiceDto: Schema = {
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
    }
};

export interface ModelEditServiceDto {
    markId?: number
    name?: string
}
export const modelEditServiceDto: Schema = {
    markId: {
        type: 'number',
        reference: {
            ID: true,
        }
    },
    name: {
        type: 'string',
        reference: {
            length: {
                min: 3,
                max: 15,
            }
        }
    }
};
