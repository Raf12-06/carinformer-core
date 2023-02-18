import { engineCreateH, engineDelH, engineEditH, engineFindH, engineGetH } from './engine.handler';
import { engineCreateDto, engineDelDto, engineEditDto, engineFindDto } from './engine.dto';

export const engineRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: engineGetH.preHandler,
            handler: engineGetH.handler,
            postHandler: engineGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: engineCreateDto,
            preHandler: engineCreateH.preHandler,
            handler: engineCreateH.handler,
            postHandler: engineCreateH.postHandler,
        },
        '/edit': {
            method: 'POST',
            schema: engineEditDto,
            preHandler: engineEditH.preHandler,
            handler: engineEditH.handler,
            postHandler: engineEditH.postHandler,
        },
        '/del': {
            method: 'POST',
            schema: engineDelDto,
            preHandler: engineDelH.preHandler,
            handler: engineDelH.handler,
            postHandler: engineDelH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: engineFindDto,
            preHandler: engineFindH.preHandler,
            handler: engineFindH.handler,
            postHandler: engineFindH.postHandler,
        }
    }
}
