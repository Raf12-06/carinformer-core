import { Modification } from './modificationI';
import { modificationCreateH, modificationDelH, modificationEditH, modificationFindH, modificationGetH } from './modificationH';
import { modificationCreateV, modificationDelV, modificationEditV, modificationFindV } from './modificationV';

export const modificationR = {
    router: {
        '/': {
            url: Modification.get.url,
            method: 'GET',
            preHandler: modificationGetH.preHandler,
            handler: modificationGetH.handler,
            postHandler: modificationGetH.postHandler,
        },
        '/create': {
            url: Modification.create.url,
            method: 'POST',
            schema: modificationCreateV,
            preHandler: modificationCreateH.preHandler,
            handler: modificationCreateH.handler,
            postHandler: modificationCreateH.postHandler,
        },
        '/edit': {
            url: Modification.edit.url,
            method: 'POST',
            schema: modificationEditV,
            preHandler: modificationEditH.preHandler,
            handler: modificationEditH.handler,
            postHandler: modificationEditH.postHandler,
        },
        '/del': {
            url: Modification.del.url,
            method: 'POST',
            schema: modificationDelV,
            preHandler: modificationDelH.preHandler,
            handler: modificationDelH.handler,
            postHandler: modificationDelH.postHandler,
        },
        '/find': {
            url: Modification.find.url,
            method: 'POST',
            schema: modificationFindV,
            preHandler: modificationFindH.preHandler,
            handler: modificationFindH.handler,
            postHandler: modificationFindH.postHandler,
        }
    }
}
