import { Client } from '../../system/client';
import { MarkS } from '../../service/Mark/mark.s';
import { MarkSql } from '../../database/Mark/mark.sql';
import { ReqHandler } from 'nd-srv';
import { MarkCreateDto, MarkDelDto, MarkEditDto, MarkFindDto, MarkGetDto } from './mark.dto';
import { Mark } from '../../database/Mark/mark.e';

export const markGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: MarkGetDto, req: ReqHandler): Promise<{ list_mark: Mark[] }> {
        const markSQL = new MarkSql();
        let listMark = [];

        if (req.query?.name) {
            const markName = req.query?.name;
            listMark = await markSQL.findMatch(markName);
        } else if (req.query?.id) {
            const idMark = Number(req.query.id);
            listMark = await markSQL.select(idMark);
        } else {
            listMark = await markSQL.select();
        }

        return {
            list_mark: listMark,
        }
    },
    async postHandler(client: Client) {
    }
}

export const markCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: MarkCreateDto): Promise<{ mark: Mark }> {
        const markS = new MarkS();
        const name = data.name.toLowerCase();
        const mark = await markS.create({ name });
        return {
            mark,
        }
    },
    async postHandler(client: Client) {
    }
}

export const markEditH = {
    async preHandler(client: Client) {
    },
    async handler(data: MarkEditDto): Promise<{ mark: Mark }> {
        const markS = new MarkS();
        const idMark = data.markId;
        const mark = await markS.edit(idMark, { name: data.name });
        return {
            mark,
        }
    },
    async postHandler(client: Client) {
    }
}

export const markDelH = {
    async preHandler(client: Client) {
    },
    async handler(data: MarkDelDto): Promise<{ mark: Mark }> {
        const markS = new MarkS();
        const idMark = data.markId;
        const mark = await markS.del(idMark);
        return {
            mark,
        }
    },
    async postHandler(client: Client) {
    }
}

export const markFindH = {
    async preHandler(client: Client) {
    },
    async handler(data: MarkFindDto): Promise<{ list_mark: Mark[] }> {
        const markSQL = new MarkSql();
        const name = data.name.toLowerCase();
        const listMark = await markSQL.findMatch(name);
        return {
            list_mark: listMark,
        }
    },
    async postHandler(client: Client) {
    }
}
