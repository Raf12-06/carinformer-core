import { BodySql } from '../../database/Body/body.sql';
import { Validator } from 'nd-srv';
import { Body } from '../../database/Body/body.e';
import { BodyCreateServiceDto, bodyCreateServiceDto, bodyEditServiceDto, BodyEditServiceDto } from './body.s.dto';

export class BodyS {
    private readonly bodySQL: BodySql;

    constructor() {
        this.bodySQL = new BodySql();
    }

    public async create(data: BodyCreateServiceDto): Promise<Body> {
        const validData = Validator.validate(bodyCreateServiceDto, data, 'Body.s.create');
        return await this.bodySQL.create(validData);
    }

    public async edit(bodyId: number, data: BodyEditServiceDto): Promise<Body> {
        const validData = Validator.validate(bodyEditServiceDto, data, 'Body.s.edit');
        return await this.bodySQL.edit(bodyId, validData);
    }

    public async del(idBody: number): Promise<Body> {
        return await this.bodySQL.delete(idBody);
    }
}
