import { Client } from '../../system/client';
import { MarkS } from '../../service/Mark/MarkS';
import { Mark } from './markI';
import { MarkSQL } from '../../service/database/tables/Mark/MarkSQL';

export const markGetAllH = {
    async preHandler(client: Client) {
    },
    async handler(data: Mark.getAll.Request): Promise<Mark.getAll.Response> {
        const markSQL = new MarkSQL();
        const listMark = await markSQL.select();
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
    async handler(data: Mark.create.Request): Promise<Mark.create.Response> {
        const markS = new MarkS();
        const mark = await markS.create({ name: data.name });
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
    async handler(data: Mark.edit.Request): Promise<Mark.edit.Response> {
        const markS = new MarkS();
        const idMark = data.id;
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
    async handler(data: Mark.del.Request): Promise<Mark.del.Response> {
        const markS = new MarkS();
        const idMark = data.id;
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
    async handler(data: Mark.find.Request): Promise<Mark.find.Response> {
        const markSQL = new MarkSQL();
        const listMark = await markSQL.findMatch(data.name);
        return {
            list_mark: listMark,
        }
    },
    async postHandler(client: Client) {
    }
}
