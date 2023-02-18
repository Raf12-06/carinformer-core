import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { CarSql } from '../../database/Car/car.sql';
import { CarS } from '../../service/Car/car.s';
import { CarCreateDto, CarGetDto, CarSetRefillDto, CarSetReplacementDto } from './car.dto';
import { Car } from '../../database/Car/car.e';
import { Refill } from '../../database/Refill/refill.e';
import { RefillS } from '../../service/Refill/refill.s';
import { ReplacementSql } from '../../database/Replacement/replacement.sql';
import { ReplacementS } from '../../service/Replacement/replacement.s';
import { Replacement } from '../../database/Replacement/replacement.e';

export const carGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: CarGetDto, req: ReqHandler): Promise<{ car: Car | null }> {
        const carId = Number(req.query.id);
        const carSQL = new CarSql();
        const car = await carSQL.getById(carId);
        return {
            car,
        }
    },
    async postHandler(client: Client) {
    }
}

export const carCreateH = {
    async preHandler(client: Client) {
    },
    async handler(data: CarCreateDto): Promise<{ car: Car }> {
        const carS = new CarS();
        const car = await carS.create(data);
        return {
            car,
        }
    },
    async postHandler(client: Client) {
    }
}

export const setRefillH = {
    async preHandler(client: Client) {
    },
    async handler(data: CarSetRefillDto): Promise<{ refill: Refill }> {
        const refillS = new RefillS();
        const refill = await refillS.set(data);
        return {
            refill,
        }
    },
    async postHandler(client: Client) {
    }
}

export const setReplacementH = {
    async preHandler(client: Client) {
    },
    async handler(data: CarSetReplacementDto): Promise<{ replacement: Replacement }> {
        const replacementS = new ReplacementS();
        const replacement = await replacementS.set(data);
        return {
            replacement,
        }
    },
    async postHandler(client: Client) {
    }
}
