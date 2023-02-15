import { Body } from './bodyI';
import {
    bodyCreateH,
    bodyDelH,
    bodyEditH,
    bodyFindH,
    bodyGetH,
} from './bodyH';
import {
    bodyCreateV,
    bodyDelV,
    bodyEditV,
    bodyFindV,
} from './bodyV';

export const bodyR = {
    router: {
        '/': {
            url: Body.get.url,
            method: 'GET',
            preHandler: bodyGetH.preHandler,
            handler: bodyGetH.handler,
            postHandler: bodyGetH.postHandler,
        },
        '/create': {
            url: Body.create.url,
            method: 'POST',
            schema: bodyCreateV,
            preHandler: bodyCreateH.preHandler,
            handler: bodyCreateH.handler,
            postHandler: bodyCreateH.postHandler,
        },
        '/edit': {
            url: Body.edit.url,
            method: 'POST',
            schema: bodyEditV,
            preHandler: bodyEditH.preHandler,
            handler: bodyEditH.handler,
            postHandler: bodyEditH.postHandler,
        },
        '/del': {
            url: Body.del.url,
            method: 'POST',
            schema: bodyDelV,
            preHandler: bodyDelH.preHandler,
            handler: bodyDelH.handler,
            postHandler: bodyDelH.postHandler,
        },
        '/find': {
            url: Body.find.url,
            method: 'POST',
            schema: bodyFindV,
            preHandler: bodyFindH.postHandler,
            handler: bodyFindH.handler,
            postHandler: bodyFindH.postHandler,
        },
    }
}
