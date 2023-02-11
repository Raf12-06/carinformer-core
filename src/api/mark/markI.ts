import { MarkI } from '../../service/database/tables/Mark/MarkE';

export namespace Mark {

    export namespace get {

        export const url = '/api/mark';

        export interface Request {
        }

        export interface Response {
            list_mark: MarkI[]
        }
    }

    export namespace create {

        export const url = '/api/mark/create';

        export interface Request {
            name: string
        }
        export interface Response {
            mark: MarkI
        }
    }

    export namespace edit {

        export const url = '/api/mark/edit';

        export interface Request {
            id: number
            name: string
        }
        export interface Response {
            mark: MarkI
        }
    }

    export namespace del {

        export const url = '/api/mark/del';

        export interface Request {
            id: number
        }
        export interface Response {
            mark: MarkI
        }
    }

    export namespace find {

        export const url = '/api/mark/find';

        export interface Request {
            name: string
        }
        export interface Response {
            list_mark: MarkI[]
        }
    }
}
