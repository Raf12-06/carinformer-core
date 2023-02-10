import { Model } from './modelI';
import { modelCreateH, modelDelH, modelEditH, modelFindH, modelGetH } from './modelH';
import { modelCreateV, modelDelV, modelEditV, modelFindV } from './modelV';

export const modelR = {
    router: {
        '/': {
            url: Model.get.url,
            method: 'GET',
            preHandler: modelGetH.preHandler,
            handler: modelGetH.handler,
            postHandler: modelGetH.postHandler,
        },
        '/create': {
            url: Model.create.url,
            method: 'POST',
            schema: modelCreateV,
            preHandler: modelCreateH.preHandler,
            handler: modelCreateH.handler,
            postHandler: modelCreateH.postHandler,
        },
        '/edit': {
            url: Model.edit.url,
            method: 'POST',
            schema: modelEditV,
            preHandler: modelEditH.preHandler,
            handler: modelEditH.handler,
            postHandler: modelEditH.postHandler,
        },
        '/del': {
            url: Model.del.url,
            method: 'POST',
            schema: modelDelV,
            preHandler: modelDelH.preHandler,
            handler: modelDelH.handler,
            postHandler: modelDelH.postHandler,
        },
        '/find': {
            url: Model.find.url,
            method: 'POST',
            schema: modelFindV,
            preHandler: modelFindH.preHandler,
            handler: modelFindH.handler,
            postHandler: modelFindH.postHandler,
        }
    }
}
