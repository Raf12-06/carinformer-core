import { carCreateH, carGetH, setRefillH } from './car.handler';
import { carCreateDto, carSetRefillDto } from './car.dto';

export const carRout = {
    router: {
        '/': {
            method: 'GET',
            preHandler: carGetH.preHandler,
            handler: carGetH.handler,
            postHandler: carGetH.postHandler,
        },
        '/create': {
            method: 'POST',
            schema: carCreateDto,
            preHandler: carCreateH.preHandler,
            handler: carCreateH.handler,
            postHandler: carCreateH.postHandler,
        },
        '/set-refill': {
            method: 'POST',
            schema: carSetRefillDto,
            preHandler: setRefillH.preHandler,
            handler: setRefillH.handler,
            postHandler: setRefillH.postHandler,
        }
    }
}
