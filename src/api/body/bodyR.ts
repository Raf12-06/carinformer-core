import { Body } from './bodyI';
import {
    bodyAddBodyToModelH,
    bodyCreateH,
    bodyDelBodyFromModelH,
    bodyDelH,
    bodyEditH,
    bodyFindH,
    bodyGetH, bodyGetModelBodiesH
} from './bodyH';
import {
    bodyAddBodyToModelV,
    bodyCreateV,
    bodyDelBodyFromModelV,
    bodyDelV,
    bodyEditV,
    bodyFindV,
    bodyGetModelBodiesV
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
        '/add-body-to-model': {
            url: Body.addBodyToModel.url,
            method: 'POST',
            schema: bodyAddBodyToModelV,
            preHandler: bodyAddBodyToModelH.preHandler,
            handler: bodyAddBodyToModelH.handler,
            postHandler: bodyAddBodyToModelH.postHandler,
        },
        '/del-body-from-model': {
            url: Body.delBodyFromModel.url,
            method: 'POST',
            schema: bodyDelBodyFromModelV,
            preHandler: bodyDelBodyFromModelH.preHandler,
            handler: bodyDelBodyFromModelH.handler,
            postHandler: bodyDelBodyFromModelH.postHandler,
        },
        '/get-model-bodies': {
            url: Body.getModelBodies.url,
            method: 'POST',
            schema: bodyGetModelBodiesV,
            preHandler: bodyGetModelBodiesH.preHandler,
            handler: bodyGetModelBodiesH.handler,
            postHandler: bodyGetModelBodiesH.postHandler,
        }
    }
}
