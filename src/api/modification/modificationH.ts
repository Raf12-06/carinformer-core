import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { Modification } from './modificationI';
import { ModificationSQL } from '../../service/database/tables/Modification/ModificationSQL';
import { ModificationS } from '../../service/Modification/ModificationS';

export const modificationGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: Modification.get.Request, req: ReqHandler): Promise<Modification.get.Response> {
        const modificationSQL = new ModificationSQL();
        let listModification = [];

        if (req.query?.name) {
            const modificationName = req.query?.name;
            listModification = await modificationSQL.findMatch(modificationName);
        } else if (req.query?.id) {
            const idModification = Number(req.query.id);
            listModification = await modificationSQL.select(idModification);
        } else {
            listModification = await modificationSQL.select();
        }
        return {
            list_modification: listModification,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modificationCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: Modification.create.Request): Promise<Modification.create.Response> {
        const modificationS = new ModificationS();
        const name = data.name.toLowerCase();
        const modification = await modificationS.create({ modelId: data.modelId, name });
        return {
            modification,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modificationEditH = {
    async preHandler(client: Client) {
    },
    async handler(data: Modification.edit.Request): Promise<Modification.edit.Response> {
        const modificationS = new ModificationS();
        const idModification = data.id;
        const modification = await modificationS.edit(idModification, { modelId: data.modelId, name: data.name });
        return {
            modification,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modificationDelH = {
    async preHandler(client: Client) {
    },
    async handler(data: Modification.del.Request): Promise<Modification.del.Response> {
        const modificationS = new ModificationS();
        const idModification = data.id;
        const modification = await modificationS.del(idModification);
        return {
            modification,
        }
    },
    async postHandler(client: Client) {
    }
}

export const modificationFindH = {
    async preHandler(client: Client) {
    },
    async handler(data: Modification.find.Request): Promise<Modification.find.Response> {
        const modificationSQL = new ModificationSQL();
        const name = data.name.toLowerCase();
        const listModification = await modificationSQL.findMatch(name);
        return {
            list_modification: listModification,
        }
    },
    async postHandler(client: Client) {
    }
}
