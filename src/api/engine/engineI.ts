import { EngineI } from '../../service/database/tables/Engine/EngineE';

export namespace Engine {
    export namespace get {
        export const url = '/api/engine';
        export interface Request {
        }
        export interface Response {
            list_engine: EngineI[]
        }
    }

    export namespace create {
        export const url = '/api/engine/create';
        export interface Request {
            name: string
            volume: number
            horsepower: number
            mediumExpense: number
        }
        export interface Response {
            engine: EngineI
        }
    }

    export namespace edit {
        export const url = '/api/engine/edit';
        export interface Request {
            engineId: number
            name?: string
            volume?: number
            horsepower?: number
            mediumExpense?: number
        }
        export interface Response {
            engine: EngineI
        }
    }

    export namespace del {
        export const url = '/api/engine/del';
        export interface Request {
            engineId: number
        }
        export interface Response {
            engine: EngineI
        }
    }

    export namespace find {
        export const url = '/api/engine/find';
        export interface Request {
            name: string
        }
        export interface Response {
            list_engine: EngineI[]
        }
    }
}
