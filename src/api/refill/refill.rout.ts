import { refillDelLastDto, refillFindFuelDto } from './refill.dto';
import { refillDelLastH, refillFindFuelH } from './refill.handler';

export const refillRout = {
    router: {
        '/del-last': {
            method: 'POST',
            schema: refillDelLastDto,
            preHandler: refillDelLastH.preHandler,
            handler: refillDelLastH.handler,
            postHandler: refillDelLastH.postHandler,
        },
        '/find': {
            method: 'POST',
            schema: refillFindFuelDto,
            preHandler: refillFindFuelH.preHandler,
            handler: refillFindFuelH.handler,
            postHandler: refillFindFuelH.postHandler,
        }
    }
}
