import { Client } from '../../system/client';
import { BodySql } from '../../database/Body/body.sql';
import { BodyS } from '../../service/Body/body.s';
import { ReqHandler } from 'nd-srv';
import { BodyCreateDto, BodyDelDto, BodyEditDto, BodyFindDto, BodyGetDto } from './body.dto';
import { Body } from '../../database/Body/body.e';

export const bodyGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: BodyGetDto, req: ReqHandler): Promise<{ list_body: Body[] }> {
        const bodySQL = new BodySql();
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
    async handler(data: BodyCreateDto): Promise<{ body: Body }> {
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
    async handler(data: BodyEditDto): Promise<{ body: Body }> {
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
    async handler(data: BodyDelDto): Promise<{ body: Body }> {
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
    async handler(data: BodyFindDto): Promise<{ list_body: Body[] }> {
        const bodySQL = new BodySql();
        const listBody = await bodySQL.findMatch(data.name);
        return {
            list_body: listBody
        }
    },
    async postHandler(client: Client) {
    }
}
