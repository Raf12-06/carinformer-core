import { Client } from '../../system/client';
import { Body } from './bodyI';
import { BodySQL } from '../../service/Body/BodySQL';
import { BodyS } from '../../service/Body/BodyS';
import { ReqHandler } from 'nd-srv';

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
