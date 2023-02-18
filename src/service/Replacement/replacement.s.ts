import { Replacement } from '../../database/Replacement/replacement.e';
import { Validator } from 'nd-srv';
import { ReplacementSql } from '../../database/Replacement/replacement.sql';
import { replacementSetServiceDto, ReplacementSetServiceDto } from './replacement.s.dto';

export class ReplacementS {
    private readonly replacementSQL: ReplacementSql;

    constructor() {
        this.replacementSQL = new ReplacementSql();
    }

    public async set(data: ReplacementSetServiceDto): Promise<Replacement> {
        const validData = Validator.validate(replacementSetServiceDto, data, 'replacement.s.setReplacement');
        return await this.replacementSQL.create(validData);
    }
}
