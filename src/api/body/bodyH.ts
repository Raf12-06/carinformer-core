import { Client } from '../../system/client';
import { Body } from './bodyI';
import { BodySQL } from '../../service/database/tables/Body/BodySQL';
import { ReqHandler } from 'nd-srv';
import { BodyS } from '../../service/Body/BodyS';
import { ModelBodySQL } from '../../service/database/tables/ModelBody/ModelBodySQL';

export const bodyGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.get.Request, req: ReqHandler): Promise<Body.get.Response> {
        const bodySQL = new BodySQL();
        let listBody = [];

        if (req.query?.name) {
            const bodyName = req.query?.name;
            listBody = await bodySQL.findMatch(bodyName);
        } else if (req.query?.id) {
            const idBody = Number(req.query.id);
            listBody = await bodySQL.select(idBody);
        } else {
            listBody = await bodySQL.select();
        }

        return {
            list_body: listBody
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.create.Request): Promise<Body.create.Response> {
        const bodyS = new BodyS();
        const body = await bodyS.create(data);
        return {
            body
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyEditH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.edit.Request): Promise<Body.edit.Response> {
        const bodyS = new BodyS();
        const body = await bodyS.edit(data.bodyId, data);
        return {
            body
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyDelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.del.Request): Promise<Body.del.Response> {
        const bodyS = new BodyS();
        const body = await bodyS.del(data.bodyId);
        return {
            body
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyFindH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.find.Request): Promise<Body.find.Response> {
        const bodySQL = new BodySQL();
        const listBody = await bodySQL.findMatch(data.name);
        return {
            list_body: listBody
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyAddBodyToModelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.addBodyToModel.Request): Promise<Body.addBodyToModel.Response> {
        const bodyS = new BodyS();
        const modelBody = await bodyS.addBodyInModel(data);
        return {
            model_body: modelBody
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyDelBodyFromModelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.delBodyFromModel.Request): Promise<Body.addBodyToModel.Response> {
        const bodyS = new BodyS();
        const modelBody = await bodyS.delBodyFromModel(data.modelBodyId);
        return {
            model_body: modelBody
        }
    },
    async postHandler(client: Client) {
    }
}

export const bodyGetModelBodiesH = {
    async preHandler(client: Client) {
    },
    async handler(data: Body.getModelBodies.Request): Promise<Body.getModelBodies.Response> {
        const modelBodySQL = new ModelBodySQL();
        const listModelBody = await modelBodySQL.selectModelBodies(data.modelId);
        return {
            list_model_body: listModelBody
        }
    },
    async postHandler(client: Client) {
    }
}
