import { BaseSQL } from '../../system/ConnectDB';
import { ReplacementI } from './ReplacementE';
import { Validator } from 'nd-srv';
import { ReplacementTypeSchemeInsert } from '../ReplacementType/ReplacementTypeE';

export class ReplacementSQL extends BaseSQL {
    public async create(data: Partial<ReplacementI>): Promise<ReplacementI> {
        const validData = Validator.validate(ReplacementTypeSchemeInsert, data, 'ReplacementSQL.create');
        return await this.db.replacement.create({
            data: {
                ...validData,
            }
        });
    }
}
