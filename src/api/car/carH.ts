import { Client } from '../../system/client';
import { Car } from './carI';
import { ReqHandler } from 'nd-srv';
import { CarSQL } from '../../database/Car/CarSQL';
import { CarS } from '../../service/CarS';

export const carGetH = {
    async preHandler(client: Client) {
    },
    async handler(data: Car.get.Request, req: ReqHandler): Promise<Car.get.Response> {
        const carId = Number(req.query.id);
        const carSQL = new CarSQL();
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
    async handler(data: Car.create.Request, req: ReqHandler): Promise<Car.create.Response> {
        const carSQL = new CarSQL();
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
    async handler(data: Car.setRefill.Request, req: ReqHandler): Promise<Car.setRefill.Response> {
        const carS = new CarS();
        const refill = await carS.setRefill(data);
        return {
            refill,
        }
    },
    async postHandler(client: Client) {
    }
}
