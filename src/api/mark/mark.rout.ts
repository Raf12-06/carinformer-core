import { markGetH, markCreateH, markEditH, markDelH, markFindH } from './mark.handler';
import { markCreateDto, markDelDto, markEditDto, markFindDto } from './mark.dto';

export const markRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: markGetH.preHandler,
            handler: markGetH.handler,
            postHandler: markGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: markCreateDto,
            preHandler: markCreateH.preHandler,
            handler: markCreateH.handler,
            postHandler: markCreateH.postHandler,
        },
        '/edit': {
            method: 'POST',
            schema: markEditDto,
            preHandler: markEditH.preHandler,
            handler: markEditH.handler,
            postHandler: markEditH.postHandler,
        },
        '/del': {
            method: 'POST',
            schema: markDelDto,
            preHandler: markDelH.preHandler,
            handler: markDelH.handler,
            postHandler: markDelH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: markFindDto,
            preHandler: markFindH.preHandler,
            handler: markFindH.handler,
            postHandler: markFindH.postHandler,
        }
    }
}
