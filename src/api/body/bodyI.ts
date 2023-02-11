import { BodyI } from '../../service/database/tables/Body/BodyE';
import { ModelBodyI } from '../../service/database/tables/ModelBody/ModelBodyE';

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

    export namespace addBodyToModel {
        export const url = '/api/body/add-body-to-model';
        export interface Request {
            modelId: number
            bodyId: number
        }
        export interface Response {
            model_body: ModelBodyI
        }
    }

    export namespace delBodyFromModel {
        export const url = '/api/body/del-body-from-model';
        export interface Request {
            modelBodyId: number
        }
        export interface Response {
            model_body: ModelBodyI
        }
    }

    export namespace getModelBodies {
        export const url = '/api/body/get-model-bodies';
        export interface Request {
            modelId: number
        }
        export interface Response {
            list_model_body: ModelBodyI[]
        }
    }
}
