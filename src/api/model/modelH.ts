import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { Model } from './modelI';
import { ModelSQL } from '../../service/database/tables/Model/ModelSQL';
import { ModelS } from '../../service/Model/ModelS';

export const modelGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: Model.get.Request, req: ReqHandler): Promise<Model.get.Response> {
        let idModel = 0;
        if (req.query?.id) {
            idModel = Number(req.query.id);
        }
        const modelSQL = new ModelSQL();
        const listModel = await modelSQL.select(idModel);
        return {
            list_model: listModel,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modelCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: Model.create.Request): Promise<Model.create.Response> {
        const markS = new ModelS();
        const name = data.name.toLowerCase();
        const model = await markS.create({ markId: data.markId, name });
        return {
            model,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modelEditH = {
    async preHandler(client: Client) {
    },
    async handler(data: Model.edit.Request): Promise<Model.edit.Response> {
        const modelS = new ModelS();
        const idMark = data.id;
        const model = await modelS.edit(idMark, { markId: data?.markId, name: data.name });
        return {
            model,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modelDelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Model.del.Request): Promise<Model.del.Response> {
        const modelS = new ModelS();
        const idModel = data.id;
        const model = await modelS.del(idModel);
        return {
            model,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modelFindH = {
    async preHandler(client: Client) {
    },
    async handler(data: Model.find.Request): Promise<Model.find.Response> {
        const modelSQL = new ModelSQL();
        const name = data.name.toLowerCase();
        const listModel = await modelSQL.findMatch(name);
        return {
            list_model: listModel,
        }
    },
    async postHandler(client: Client) {
    }
}
