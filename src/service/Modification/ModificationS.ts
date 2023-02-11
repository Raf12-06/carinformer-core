import { Validator } from 'nd-srv';
import { ModificationSQL } from '../database/tables/Modification/ModificationSQL';
import { ModificationI, ModificationScheme } from '../database/tables/Modification/ModificationE';

export class ModificationS {
    private readonly modificationSQL: ModificationSQL;

    constructor() {
        this.modificationSQL = new ModificationSQL();
    }

    public async create(data: Partial<ModificationI>): Promise<ModificationI> {
        const validData = Validator.validate(ModificationScheme, data);
        return await this.modificationSQL.create({ modelId: validData.modelId, name: validData.name });
    }

    public async edit(id: number, data: Partial<ModificationI>): Promise<ModificationI> {
        const validData = Validator.validate(ModificationScheme, data);
        return await this.modificationSQL.edit(id, validData);
    }

    public async del(idModification: number): Promise<ModificationI> {
        return await this.modificationSQL.delete(idModification);
    }
}
