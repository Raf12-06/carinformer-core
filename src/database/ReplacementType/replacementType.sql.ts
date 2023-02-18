import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { ReplacementInsert } from '../Replacement/replacement.e';
import { ReplacementType, replacementTypeInsert } from './replacementType.e';

export class ReplacementTypeSql extends BaseSQL {
    public async create(data: ReplacementInsert): Promise<ReplacementType> {
        const validData = Validator.validate(replacementTypeInsert, data, 'replacementType.sql.create');
        return await this.db.replacementType.create({
            data: {
                ...validData
            }
        })
    }
}
