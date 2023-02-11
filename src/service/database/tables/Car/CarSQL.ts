import { BaseSQL } from '../../ConnectDB';
import { Validator } from 'nd-srv';
import { CarI, CarSchemeInsert, CarSchemeUpdate } from './CarE';

export class CarSQL extends BaseSQL {
    public async select(idCar: number): Promise<CarI[]> {
        return await this.db.car.findMany({
            where: {
                id: idCar,
            }
        })
    }

    public async create(data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeInsert, data);
        return await this.db.car.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idCar: number, data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeUpdate, data);
        return await this.db.car.update({
            where: {
                id: idCar,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idCar: number): Promise<CarI> {
        return await this.db.car.delete({
            where: {
                id: idCar,
            }
        })
    }
}