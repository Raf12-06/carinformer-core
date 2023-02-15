import { BodySQL } from '../database/Body/BodySQL';
import { Validator } from 'nd-srv';
import { BodyI, BodySchemeUpdate, BodySchemeInsert } from '../database/Body/BodyE';

export class BodyS {
    private readonly bodySQL: BodySQL;

    constructor() {
        this.bodySQL = new BodySQL();
    }

    public async create(data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodySchemeInsert, data, 'BodyS.create');
        return await this.bodySQL.create(validData);
    }

    public async edit(idBody: number, data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodySchemeUpdate, data, 'BodyS.edit');
        return await this.bodySQL.edit(idBody, validData);
    }

    public async del(idBody: number): Promise<BodyI> {
        return await this.bodySQL.delete(idBody);
    }
}
