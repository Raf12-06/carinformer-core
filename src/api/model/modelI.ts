import { ModelI } from '../../service/Model/ModelE';

export namespace Model {

    export namespace get {
        export const url = '/api/model';
        export interface Request {
        }
        export interface Response {
            list_model: ModelI[]
        }
    }

    export namespace create {
        export const url = '/api/model/create';
        export interface Request {
            markId: number
            name: string
        }
        export interface Response {
            model: ModelI
        }
    }

    export namespace edit {
        export const url = '/api/model/edit';
        export interface Request {
            id: number
            name: string
            markId?: number
        }
        export interface Response {
            model: ModelI
        }
    }

    export namespace del {
        export const url = '/api/model/del';
        export interface Request {
            id: number
        }
        export interface Response {
            model: ModelI
        }
    }

    export namespace find {
        export const url = '/api/model/find';
        export interface Request {
            name: string
        }
        export interface Response {
            list_model: ModelI[]
        }
    }
}
