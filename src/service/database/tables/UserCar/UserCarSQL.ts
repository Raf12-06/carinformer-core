import { BaseSQL } from '../../ConnectDB';
import { UserCarI, UserCarSchemeInsert, UserCarSchemeUpdate } from './UserCarE';
import { Validator } from 'nd-srv';

export class UserCarSQL extends BaseSQL {
    public async select(data: Partial<UserCarI>): Promise<UserCarI[]> {
        return await this.db.userCar.findMany({
            where: {
                id: data?.id,
                userId: data?.userId,
                carId: data?.carId,
            }
        })
    }

    public async create(data: Partial<UserCarI>): Promise<UserCarI> {
        const validData = Validator.validate(UserCarSchemeInsert, data);
        return await this.db.userCar.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idUserCar: number, data: Partial<UserCarI>): Promise<UserCarI> {
        const validData = Validator.validate(UserCarSchemeUpdate, data);
        return await this.db.userCar.update({
            where: {
                id: idUserCar
            },
            data: {
                ...validData
            }
        })
    }

    public async del(idUserCar: number): Promise<UserCarI> {
        return await this.db.userCar.delete({
            where: {
                id: idUserCar
            }
        })
    }
}
