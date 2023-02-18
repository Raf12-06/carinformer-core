import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Refill, refillInsert, RefillInsert } from './refill.e';

export class RefillSql extends BaseSQL {
    public async create(data: RefillInsert): Promise<Refill> {
        const validData: RefillInsert = Validator.validate(refillInsert, data, 'RefillSql.create');
        return await this.db.refill.create({
            data: {
                ...validData,
            }
        })
    }

    public async getLast(idCar: number): Promise<Refill | null> {
        return await this.db.refill.findFirst({
            where: {
                carId: idCar,
            },
            orderBy: {
                date: 'desc'
            },
            take: 1,
        })
    }
}
