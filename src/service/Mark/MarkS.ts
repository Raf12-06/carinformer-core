import { MarkI } from '../database/tables/Mark/MarkE';
import { Validator } from 'nd-srv';
import { MarkSQL } from '../database/tables/Mark/MarkSQL';

export class MarkS {
    private readonly markSQL: MarkSQL;

    constructor() {
        this.markSQL = new MarkSQL();
    }

    public async create(data: { name: string }): Promise<MarkI> {
        const validData = Validator.validate({ name: { type: 'string' } }, data);
        return await this.markSQL.create({ name: validData.name });
    }

    public async edit(id: number, data: { name: string }): Promise<MarkI> {
        const validData = Validator.validate({ name: { type: 'string' } }, data);
        return await this.markSQL.edit(id, validData);
    }

    public async del(id: number): Promise<MarkI> {
        return await this.markSQL.delete(id);
    }
}
