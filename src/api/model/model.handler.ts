import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { ModelSql } from '../../database/Model/model.sql';
import { ModelS } from '../../service/Model/model.s';
import { ModelCreateDto, ModelDelDto, ModelEditDto, ModelFindDto, ModelGetDto } from './model.dto';
import { Model } from '../../database/Model/model.e';

export const modelGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: ModelGetDto, req: ReqHandler): Promise<{ list_model: Model[] }> {
        const modelSQL = new ModelSql();
        let listModel = [];

        if (req.query?.name) {
            const modelName = req.query?.name;
            listModel = await modelSQL.findMatch(modelName);
        } else if (req.query?.id) {
            const idModel = Number(req.query.id);
            listModel = await modelSQL.select(idModel);
        } else {
            listModel = await modelSQL.select();
        }
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
    async handler(data: ModelCreateDto): Promise<{ model: Model }> {
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
    async handler(data: ModelEditDto): Promise<{ model: Model }> {
        const modelS = new ModelS();
        const idMark = data.modelId;
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
    async handler(data: ModelDelDto): Promise<{ model: Model }> {
        const modelS = new ModelS();
        const idModel = data.modelId;
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
    async handler(data: ModelFindDto): Promise<{ list_model: Model[] }> {
        const modelSQL = new ModelSql();
        const name = data.name.toLowerCase();
        const listModel = await modelSQL.findMatch(name);
        return {
            list_model: listModel,
        }
    },
    async postHandler(client: Client) {
    }
}
