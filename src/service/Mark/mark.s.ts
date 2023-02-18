import { Validator } from 'nd-srv';
import { MarkSql } from '../../database/Mark/mark.sql';
import { Mark } from '../../database/Mark/mark.e';
import { markCreateServiceDto, MarkCreateServiceDto, markEditServiceDto, MarkEditServiceDto } from './mark.s.dto';

export class MarkS {
    private readonly markSQL: MarkSql;

    constructor() {
        this.markSQL = new MarkSql();
    }

    public async create(data: MarkCreateServiceDto): Promise<Mark> {
        const validData = Validator.validate(markCreateServiceDto, data, 'mark.s.create');
        return await this.markSQL.create({ name: validData.name });
    }

    public async edit(id: number, data: MarkEditServiceDto): Promise<Mark> {
        const validData = Validator.validate(markEditServiceDto, data, 'mark.s.edit');
        return await this.markSQL.edit(id, validData);
    }

    public async del(id: number): Promise<Mark> {
        return await this.markSQL.delete(id);
    }
}
