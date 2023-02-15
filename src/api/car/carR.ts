import { Car } from './carI';
import { carCreateH, carGetH } from './carH';
import { carCreateV } from './carV';

export const carR = {
    router: {
        '/': {
            url: Car.get.url,
            method: 'GET',
            preHandler: carGetH.preHandler,
            handler: carGetH.handler,
            postHandler: carGetH.postHandler,
        },
        '/create': {
            url: Car.create.url,
            method: 'POST',
            schema: carCreateV,
            preHandler: carCreateH.preHandler,
            handler: carCreateH.handler,
            postHandler: carCreateH.postHandler,
        }
    }
}
