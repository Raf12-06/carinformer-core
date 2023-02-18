import { bodyCreateH, bodyDelH, bodyEditH, bodyFindH, bodyGetH } from './body.handler';
import { bodyCreateDto, bodyDelDto, bodyEditDto, bodyFindDto } from './body.dto';

export const bodyRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: bodyGetH.preHandler,
            handler: bodyGetH.handler,
            postHandler: bodyGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: bodyCreateDto,
            preHandler: bodyCreateH.preHandler,
            handler: bodyCreateH.handler,
            postHandler: bodyCreateH.postHandler,
        },
        '/edit': {
            method: 'POST',
            schema: bodyEditDto,
            preHandler: bodyEditH.preHandler,
            handler: bodyEditH.handler,
            postHandler: bodyEditH.postHandler,
        },
        '/del': {
            method: 'POST',
            schema: bodyDelDto,
            preHandler: bodyDelH.preHandler,
            handler: bodyDelH.handler,
            postHandler: bodyDelH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: bodyFindDto,
            preHandler: bodyFindH.postHandler,
            handler: bodyFindH.handler,
            postHandler: bodyFindH.postHandler,
        },
    }
}
