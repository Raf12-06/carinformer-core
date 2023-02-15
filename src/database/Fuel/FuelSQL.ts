import { BaseSQL } from '../../system/ConnectDB';
import { FuelI, FuelSchemeInsert, FuelSchemeUpdate } from './FuelE';
import { Validator } from 'nd-srv';

export class FuelSQL extends BaseSQL {
    public async create(data: Partial<FuelI>): Promise<FuelI> {
        const validData = Validator.validate(FuelSchemeInsert, data, 'FuelSQL.create');
        return await this.db.fuel.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idFuel: number, data: Partial<FuelI>): Promise<FuelI> {
        const validData = Validator.validate(FuelSchemeUpdate, data, 'FuelSQL.create');
        return await this.db.fuel.update({
            where: {
                id: idFuel,
            },
            data: {
                ...validData
            }
        })
    }

    public async getAll(): Promise<FuelI[]> {
        return await this.db.fuel.findMany();
    }
}
