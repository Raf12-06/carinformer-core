import { Validator } from 'nd-srv';
import { ModificationSql } from '../../database/Modification/modification.sql';
import { Modification } from '../../database/Modification/modification.e';
import {
    modificationCreateServiceDto,
    ModificationCreateServiceDto,
    modificationEditServiceDto,
    ModificationEditServiceDto
} from './modification.s.dto';

export class ModificationS {
    private readonly modificationSQL: ModificationSql;

    constructor() {
        this.modificationSQL = new ModificationSql();
    }

    public async create(data: ModificationCreateServiceDto): Promise<Modification> {
        const validData = Validator.validate(modificationCreateServiceDto, data, 'modification.s.create');
        return await this.modificationSQL.create({ modelId: validData.modelId, name: validData.name });
    }

    public async edit(id: number, data: ModificationEditServiceDto): Promise<Modification> {
        const validData = Validator.validate(modificationEditServiceDto, data, 'modification.s.edit');
        return await this.modificationSQL.edit(id, validData);
    }

    public async del(idModification: number): Promise<Modification> {
        return await this.modificationSQL.delete(idModification);
    }
}
