import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Fuel, fuelInsert, FuelInsert, fuelUpdate, FuelUpdate } from './fuel.e';

export class FuelSql extends BaseSQL {
    public async create(data: FuelInsert): Promise<Fuel> {
        const validData: FuelInsert = Validator.validate(fuelInsert, data, 'fuel.sql.create');
        return await this.db.fuel.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idFuel: number, data: FuelUpdate): Promise<Fuel> {
        const validData: FuelUpdate = Validator.validate(fuelUpdate, data, 'fuel.sql.create');
        return await this.db.fuel.update({
            where: {
                id: idFuel,
            },
            data: {
                ...validData
            }
        })
    }

    public async getAll(): Promise<Fuel[]> {
        return await this.db.fuel.findMany();
    }
}
