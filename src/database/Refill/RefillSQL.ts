import { BaseSQL } from '../../system/ConnectDB';
import { RefillI, RefillSchemeInsert } from './RefillE';
import { Validator } from 'nd-srv';

export class RefillSQL extends BaseSQL {
    public async create(data: Partial<RefillI>): Promise<RefillI> {
        const validData = Validator.validate(RefillSchemeInsert, data, 'RefillSQL.create');
        return await this.db.refill.create({
            data: {
                ...validData,
            }
        })
    }
}
