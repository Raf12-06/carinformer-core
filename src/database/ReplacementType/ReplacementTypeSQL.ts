import { BaseSQL } from '../../system/ConnectDB';
import { ReplacementTypeI, ReplacementTypeSchemeInsert } from './ReplacementTypeE';
import { Validator } from 'nd-srv';

export class ReplacementTypeSQL extends BaseSQL {
    public async create(data: Partial<ReplacementTypeI>): Promise<ReplacementTypeI> {
        const validData = Validator.validate(ReplacementTypeSchemeInsert, data, 'ReplacementTypeSQL.create');
        return await this.db.replacementType.create({
            data: {
                ...validData
            }
        })
    }
}
