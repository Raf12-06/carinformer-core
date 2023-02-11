import { ModificationI } from '../../service/database/tables/Modification/ModificationE';

export namespace Modification {

    export namespace get {
        export const url = '/api/modification';
        export interface Request {
        }
        export interface Response {
            list_modification: ModificationI[]
        }
    }

    export namespace create {
        export const url = '/api/modification/create';
        export interface Request {
            modelId: number
            name: string
        }
        export interface Response {
            modification: ModificationI
        }
    }

    export namespace edit {
        export const url = '/api/modification/edit';
        export interface Request {
            id: number
            name: string
            modelId?: number
        }
        export interface Response {
            modification: ModificationI
        }
    }

    export namespace del {
        export const url = '/api/modification/del';
        export interface Request {
            id: number
        }
        export interface Response {
            modification: ModificationI
        }
    }

    export namespace find {
        export const url = '/api/modification/find';
        export interface Request {
            name: string
        }
        export interface Response {
            list_modification: ModificationI[]
        }
    }
}
