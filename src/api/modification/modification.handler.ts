import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { ModificationSql } from '../../database/Modification/modification.sql';
import { ModificationS } from '../../service/Modification/modification.s';
import {
    ModificationCreateDto,
    ModificationDelDto,
    ModificationEditDto,
    ModificationFindDto,
    ModificationGetDto
} from './modification.dto';
import { Modification } from '../../database/Modification/modification.e';

export const modificationGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: ModificationGetDto, req: ReqHandler): Promise<{ list_modification: Modification[] }> {
        const modificationSQL = new ModificationSql();
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
    async handler(data: ModificationCreateDto): Promise<{ modification: Modification }> {
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
    async handler(data: ModificationEditDto): Promise<{ modification: Modification }> {
        const modificationS = new ModificationS();
        const idModification = data.modificationId;
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
    async handler(data: ModificationDelDto): Promise<{ modification: Modification }> {
        const modificationS = new ModificationS();
        const idModification = data.modificationId;
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
    async handler(data: ModificationFindDto): Promise<{ list_modification: Modification[] }> {
        const modificationSQL = new ModificationSql();
        const name = data.name.toLowerCase();
        const listModification = await modificationSQL.findMatch(name);
        return {
            list_modification: listModification,
        }
    },
    async postHandler(client: Client) {
    }
}
