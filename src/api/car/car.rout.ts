import { carCreateH, carGetH, carSetRefillH, carSetReplacementH } from './car.handler';
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
            preHandler: carSetRefillH.preHandler,
            handler: carSetRefillH.handler,
            postHandler: carSetRefillH.postHandler,
        },
        '/set-replacement': {
            method: 'POST',
            schema: carSetReplacementDto,
            preHandler: carSetReplacementH.preHandler,
            handler: carSetReplacementH.handler,
            postHandler: carSetReplacementH.postHandler,
        }
    }
}
