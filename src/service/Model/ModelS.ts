import { ModelSQL } from '../database/tables/Model/ModelSQL';
import { Validator } from 'nd-srv';
import { ModelI, ModelScheme } from '../database/tables/Model/ModelE';

export class ModelS {
    private readonly modelSQL: ModelSQL;

    constructor() {
        this.modelSQL = new ModelSQL();
    }

    public async create(data: Partial<ModelI>): Promise<ModelI> {
        const validData = Validator.validate(ModelScheme, data);
        return await this.modelSQL.create({ markId: validData.markId, name: validData.name });
    }

    public async edit(id: number, data: Partial<ModelI>): Promise<ModelI> {
        const validData = Validator.validate(ModelScheme, data);
        return await this.modelSQL.edit(id, validData);
    }

    public async del(idModel: number): Promise<ModelI> {
        return await this.modelSQL.delete(idModel);
    }
}
