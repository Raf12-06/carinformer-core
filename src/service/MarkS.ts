import { MarkI, MarkSchemeInsert, MarkSchemeUpdate } from '../database/Mark/MarkE';
import { Validator } from 'nd-srv';
import { MarkSQL } from '../database/Mark/MarkSQL';

export class MarkS {
    private readonly markSQL: MarkSQL;

    constructor() {
        this.markSQL = new MarkSQL();
    }

    public async create(data: Partial<MarkI>): Promise<MarkI> {
        const validData = Validator.validate(MarkSchemeInsert, data, 'MarkS.create');
        return await this.markSQL.create({ name: validData.name });
    }

    public async edit(id: number, data: Partial<MarkI>): Promise<MarkI> {
        const validData = Validator.validate(MarkSchemeUpdate, data, 'MarkS.edit');
        return await this.markSQL.edit(id, validData);
    }

    public async del(id: number): Promise<MarkI> {
        return await this.markSQL.delete(id);
    }
}
