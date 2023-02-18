import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Replacement, replacementInsert, ReplacementInsert } from './replacement.e';

export class ReplacementSql extends BaseSQL {
    public async create(data: ReplacementInsert): Promise<Replacement> {
        const validData = Validator.validate(replacementInsert, data, 'replacement.sql.create');
        return await this.db.replacement.create({
            data: {
                ...validData,
            }
        });
    }
}
