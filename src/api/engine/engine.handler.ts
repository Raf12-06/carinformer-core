import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { EngineSql } from '../../database/Engine/engine.sql';
import { EngineS } from '../../service/Engine/engine.s';
import { EngineCreateDto, EngineDelDto, EngineEditDro, EngineFindDto, EngineGetDto } from './engine.dto';
import { Engine } from '../../database/Engine/engine.e';

export const engineGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: EngineGetDto, req: ReqHandler): Promise<{ list_engine: Engine[] }> {
        const engineSQL = new EngineSql();
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
    async handler(data: EngineCreateDto): Promise<{ engine: Engine }> {
        const engineS = new EngineS();

        const engine = await engineS.create(data);
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
    async handler(data: EngineEditDro): Promise<{ engine: Engine }> {
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
    async handler(data: EngineDelDto): Promise<{ engine: Engine }> {
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
    async handler(data: EngineFindDto): Promise<{ list_engine: Engine[] }> {
        const engineSQL = new EngineSql();
        const listEngine = await engineSQL.findMatch(data.name);
        return {
            list_engine: listEngine
        }
    },
    async postHandler(client: Client) {
    }
}
