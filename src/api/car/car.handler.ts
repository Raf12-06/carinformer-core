import { Client } from '../../system/client';
import { ReqHandler } from 'nd-srv';
import { CarSql } from '../../database/Car/car.sql';
import { CarS } from '../../service/Car/car.s';
import { CarCreateDto, CarGetDto, CarSetRefillDto } from './car.dto';
import { Car } from '../../database/Car/car.e';
import { Refill } from '../../database/Refill/refill.e';

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
        const carSQL = new CarSql();
        const car = await carSQL.create(data);
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
        const carS = new CarS();
        const refill = await carS.setRefill(data);
        return {
            refill,
        }
    },
    async postHandler(client: Client) {
    }
}
