import { Client } from '../../system/client';
import { RefillDelLastDto, RefillFindFuelDto } from './refill.dto';
import { Refill } from '../../database/Refill/refill.e';
import { RefillS } from '../../service/Refill/refill.s';
import { Fuel } from '../../database/Fuel/fuel.e';
import { FuelSql } from '../../database/Fuel/fuel.sql';

export const refillDelLastH = {
    async preHandler(client: Client): Promise<void> {
    },
    async handler(data: RefillDelLastDto): Promise<{ refill: Refill | null }> {
        const refillS = new RefillS();
        const refill = await refillS.delLast(data.carId);
        return {
            refill,
        }
    },
    async postHandler(client: Client): Promise<void> {
    }
}

export const refillFindFuelH = {
    async preHandler(client: Client): Promise<void> {
    },
    async handler(data: RefillFindFuelDto): Promise<{ list_fuel: Fuel[] }> {
        const fuelS = new FuelSql();
        const listFuel = await fuelS.find(data.name);
        return {
            list_fuel: listFuel
        }
    },
    async postHandler(client: Client): Promise<void> {
    }
}
