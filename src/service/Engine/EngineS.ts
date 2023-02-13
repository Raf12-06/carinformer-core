import { EngineSQL } from '../database/tables/Engine/EngineSQL';
import { Validator } from 'nd-srv';
import { EngineI, EngineScheme } from '../database/tables/Engine/EngineE';

export class EngineS {
    private readonly engineSQL: EngineSQL;

    constructor() {
        this.engineSQL = new EngineSQL();
    }

    public async create(data: Partial<EngineI>): Promise<EngineI> {
        const validData = Validator.validate(EngineScheme, data, 'EngineS.create');
        return await this.engineSQL.create(validData);
    }

    public async edit(idEngine: number, data: Partial<EngineI>): Promise<EngineI> {
        const validData = Validator.validate(EngineScheme, data, 'EngineS.edit');
        return await this.engineSQL.edit(idEngine, validData);
    }

    public async del(idEngine: number): Promise<EngineI> {
        return await this.engineSQL.delete(idEngine);
    }
}
