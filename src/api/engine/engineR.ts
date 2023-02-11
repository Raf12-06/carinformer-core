import { Engine } from './engineI';
import { engineCreateH, engineDelH, engineEditH, engineFindH, engineGetH } from './engineH';
import { engineCreateV, engineDelV, engineEditV, engineFindV } from './engineV';

export const engineR = {
    router: {
        '/': {
            url: Engine.get.url,
            method: 'GET',
            preHandler: engineGetH.preHandler,
            handler: engineGetH.handler,
            postHandler: engineGetH.postHandler,
        },
        '/create': {
            url: Engine.create.url,
            method: 'POST',
            schema: engineCreateV,
            preHandler: engineCreateH.preHandler,
            handler: engineCreateH.handler,
            postHandler: engineCreateH.postHandler,
        },
        '/edit': {
            url: Engine.edit.url,
            method: 'POST',
            schema: engineEditV,
            preHandler: engineEditH.preHandler,
            handler: engineEditH.handler,
            postHandler: engineEditH.postHandler,
        },
        '/del': {
            url: Engine.del.url,
            method: 'POST',
            schema: engineDelV,
            preHandler: engineDelH.preHandler,
            handler: engineDelH.handler,
            postHandler: engineDelH.postHandler,
        },
        '/find': {
            url: Engine.find.url,
            method: 'POST',
            schema: engineFindV,
            preHandler: engineFindH.preHandler,
            handler: engineFindH.handler,
            postHandler: engineFindH.postHandler,
        }
    }
}
