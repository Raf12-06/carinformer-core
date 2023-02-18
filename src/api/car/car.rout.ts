import { carCreateH, carGetH, setRefillH, setReplacementH } from './car.handler';
import { carCreateDto, carSetRefillDto, carSetReplacementDto } from './car.dto';

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
        },
        '/set-replacement': {
            method: 'POST',
            schema: carSetReplacementDto,
            preHandler: setReplacementH.preHandler,
            handler: setReplacementH.handler,
            postHandler: setReplacementH.postHandler,
        }
    }
}
