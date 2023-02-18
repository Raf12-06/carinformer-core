import { ModelSql } from '../../database/Model/model.sql';
import { Validator } from 'nd-srv';
import { Model } from '../../database/Model/model.e';
import { modelCreateServiceDto, ModelCreateServiceDto, modelEditServiceDto, ModelEditServiceDto } from './model.s.dto';

export class ModelS {
    private readonly modelSQL: ModelSql;

    constructor() {
        this.modelSQL = new ModelSql();
    }

    public async create(data: ModelCreateServiceDto): Promise<Model> {
        const validData = Validator.validate(modelCreateServiceDto, data, 'model.s.create');
        return await this.modelSQL.create({ markId: validData.markId, name: validData.name });
    }

    public async edit(id: number, data: ModelEditServiceDto): Promise<Model> {
        const validData = Validator.validate(modelEditServiceDto, data, 'model.s.edit');
        return await this.modelSQL.edit(id, validData);
    }

    public async del(idModel: number): Promise<Model> {
        return await this.modelSQL.delete(idModel);
    }
}
