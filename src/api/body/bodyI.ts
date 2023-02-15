import { BodyI } from '../../database/Body/BodyE';

export namespace Body {
    export namespace get {

        export const url = '/api/body';

        export interface Request {
        }

        export interface Response {
            list_body: BodyI[]
        }
    }

    export namespace create {
        export const url = '/api/body/create';
        export interface Request {
            name: string
            modelId: number
        }
        export interface Response {
            body: BodyI
        }
    }

    export namespace edit {
        export const url = '/api/body/edit';
        export interface Request {
            bodyId: number
            name: string
            modelId: number
        }
        export interface Response {
            body: BodyI
        }
    }

    export namespace del {
        export const url = '/api/body/del';
        export interface Request {
            bodyId: number
        }
        export interface Response {
            body: BodyI
        }
    }

    export namespace find {
        export const url = '/api/body/find';
        export interface Request {
            name: string
        }
        export interface Response {
            list_body: BodyI[]
        }
    }
}
