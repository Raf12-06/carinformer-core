import { BaseSQL } from '../../system/ConnectDB';
import { Car, CarInsert, carInsert, CarUpdate, carUpdate } from './car.e';
import { Validator } from 'nd-srv';

export class CarSql extends BaseSQL {
    public async getById(idCar: number): Promise<Car | null> {
        return await this.db.car.findFirst({
            where: {
                id: idCar
            }
        });
    }

    public async create(data: CarInsert): Promise<Car> {
        const validData: CarInsert = Validator.validate(carInsert, data, 'car.sql.create');
        return await this.db.car.create({
            data: {
                ...validData
            }
        });
    }

    public async update(idCar: number, data: CarUpdate): Promise<Car> {
        const validData: CarUpdate = Validator.validate(carUpdate, data, 'car.sql.update');
        return await this.db.car.update({
            where: {
                id: idCar
            },
            data: {
                ...validData
            }
        })
    }

    public async del(idCar: number): Promise<Car> {
        return await this.db.car.delete({
            where: {
                id: idCar
            }
        })
    }
}
