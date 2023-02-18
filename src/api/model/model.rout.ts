import { modelCreateH, modelDelH, modelEditH, modelFindH, modelGetH } from './model.handler';
import { modelCreateDto, modelDelDto, modelEditDto, modelFindDto } from './model.dto';

export const modelRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: modelGetH.preHandler,
            handler: modelGetH.handler,
            postHandler: modelGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: modelCreateDto,
            preHandler: modelCreateH.preHandler,
            handler: modelCreateH.handler,
            postHandler: modelCreateH.postHandler,
        },
        '/edit': {
            method: 'POST',
            schema: modelEditDto,
            preHandler: modelEditH.preHandler,
            handler: modelEditH.handler,
            postHandler: modelEditH.postHandler,
        },
        '/del': {
            method: 'POST',
            schema: modelDelDto,
            preHandler: modelDelH.preHandler,
            handler: modelDelH.handler,
            postHandler: modelDelH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: modelFindDto,
            preHandler: modelFindH.preHandler,
            handler: modelFindH.handler,
            postHandler: modelFindH.postHandler,
        }
    }
}
