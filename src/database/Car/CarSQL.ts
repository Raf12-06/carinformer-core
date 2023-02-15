import { BaseSQL } from '../../system/ConnectDB';
import { CarI, CarSchemeInsert } from './CarE';
import { Validator } from 'nd-srv';

export class CarSQL extends BaseSQL {
    public async getById(idCar: number): Promise<CarI | null> {
        return await this.db.car.findUnique({
            where: {
                id: idCar
            }
        });
    }

    public async create(data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeInsert, data, 'CarSQL.create');
        return await this.db.car.create({
            data: {
                ...validData
            }
        });
    }

    public async del(idCar: number): Promise<CarI> {
        return await this.db.car.delete({
            where: {
                id: idCar
            }
        })
    }
}
