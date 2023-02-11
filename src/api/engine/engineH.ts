import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { Engine } from './engineI';
import { EngineSQL } from '../../service/database/tables/Engine/EngineSQL';
import { EngineS } from '../../service/Engine/EngineS';

export const engineGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: Engine.get.Request, req: ReqHandler): Promise<Engine.get.Response> {
        const engineSQL = new EngineSQL();
        let listEngine = [];

        if (req.query?.name) {
            const engineName = req.query?.name;
            listEngine = await engineSQL.findMatch(engineName);
        } else if (req.query?.id) {
            const idEngine = Number(req.query.id);
            listEngine = await engineSQL.select(idEngine);
        } else {
            listEngine = await engineSQL.select();
        }

        return {
            list_engine: listEngine
        }
    },
    async postHandler(client: Client) {
    }
}

export const engineCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: Engine.create.Request): Promise<Engine.create.Response> {
        const engineS = new EngineS();
        const engine = await engineS.create({
            name: data.name,
            volume: data.volume,
            horsepower: data.horsepower,
            mediumExpense: data.mediumExpense
        });
        return {
            engine
        }
    },
    async postHandler(client: Client) {
    }
}

export const engineEditH = {
    async preHandler(client: Client) {
    },
    async handler(data: Engine.edit.Request): Promise<Engine.edit.Response> {
        const engineS = new EngineS();
        const engine = await engineS.edit(data.engineId, data);
        return {
            engine
        }
    },
    async postHandler(client: Client) {
    }
}

export const engineDelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Engine.del.Request): Promise<Engine.del.Response> {
        const engineS = new EngineS();
        const engine = await engineS.del(data.engineId);
        return {
            engine
        }
    },
    async postHandler(client: Client) {
    }
}

export const engineFindH = {
    async preHandler(client: Client) {
    },
    async handler(data: Engine.find.Request): Promise<Engine.find.Response> {
        const engineSQL = new EngineSQL();
        const listEngine = await engineSQL.findMatch(data.name);
        return {
            list_engine: listEngine
        }
    },
    async postHandler(client: Client) {
    }
}
