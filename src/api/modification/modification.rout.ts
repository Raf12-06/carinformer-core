import { modificationCreateH, modificationDelH, modificationEditH, modificationFindH, modificationGetH } from './modification.handler';
import { modificationCreateDto, modificationDelDto, modificationEditDto, modificationFindDto } from './modification.dto';

export const modificationRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: modificationGetH.preHandler,
            handler: modificationGetH.handler,
            postHandler: modificationGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: modificationCreateDto,
            preHandler: modificationCreateH.preHandler,
            handler: modificationCreateH.handler,
            postHandler: modificationCreateH.postHandler,
        },
        '/edit': {
            method: 'POST',
            schema: modificationEditDto,
            preHandler: modificationEditH.preHandler,
            handler: modificationEditH.handler,
            postHandler: modificationEditH.postHandler,
        },
        '/del': {
            method: 'POST',
            schema: modificationDelDto,
            preHandler: modificationDelH.preHandler,
            handler: modificationDelH.handler,
            postHandler: modificationDelH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: modificationFindDto,
            preHandler: modificationFindH.preHandler,
            handler: modificationFindH.handler,
            postHandler: modificationFindH.postHandler,
        }
    }
}
