import { BaseSQL } from '../../system/ConnectDB';
import { RefillI, RefillSchemeInsert } from './RefillE';
import { Validator } from 'nd-srv';

export class RefillSQL extends BaseSQL {
    public async create(data: Partial<RefillI>): Promise<RefillI> {
        const validData = Validator.validate(RefillSchemeInsert, data, 'RefillSQL.create');
        delete validData.date;
        return await this.db.refill.create({
            data: {
                ...validData,
                date: new Date()
            }
        })
    }

    public async getLast(idCar: number): Promise<RefillI> {
        return await this.db.refill.findFirstOrThrow({
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
