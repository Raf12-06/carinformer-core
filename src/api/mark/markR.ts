import { markGetH, markCreateH, markEditH, markDelH, markFindH } from './markH';
import { markEditV, markCreateV, markDelV, markFindV } from './markV';
import { Mark } from './markI';

export const markR = {
    router: {
        '/': {
            url: Mark.get.url,
            method: 'GET',
            preHandler: markGetH.preHandler,
            handler: markGetH.handler,
            postHandler: markGetH.postHandler,
        },
        '/create': {
            url: Mark.create.url,
            method: 'POST',
            schema: markCreateV,
            preHandler: markCreateH.preHandler,
            handler: markCreateH.handler,
            postHandler: markCreateH.postHandler,
        },
        '/edit': {
            url: Mark.edit.url,
            method: 'POST',
            schema: markEditV,
            preHandler: markEditH.preHandler,
            handler: markEditH.handler,
            postHandler: markEditH.postHandler,
        },
        '/del': {
            url: Mark.del.url,
            method: 'POST',
            schema: markDelV,
            preHandler: markDelH.preHandler,
            handler: markDelH.handler,
            postHandler: markDelH.postHandler,
        },
        '/find': {
            url: Mark.find.url,
            method: 'POST',
            schema: markFindV,
            preHandler: markFindH.preHandler,
            handler: markFindH.handler,
            postHandler: markFindH.postHandler,
        }
    }
}
