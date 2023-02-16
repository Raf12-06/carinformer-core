import { Car } from './carI';
import { carCreateH, carGetH, setRefillH } from './carH';
import { carCreateV, setRefillV } from './carV';

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
        },
        '/set-refill': {
            url: Car.setRefill.url,
            method: 'POST',
            schema: setRefillV,
            preHandler: setRefillH.preHandler,
            handler: setRefillH.handler,
            postHandler: setRefillH.postHandler,
        }
    }
}
