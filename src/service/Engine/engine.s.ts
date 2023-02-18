import { EngineSql } from '../../database/Engine/engine.sql';
import { Validator } from 'nd-srv';
import { Engine } from '../../database/Engine/engine.e';
import { engineCreateServiceDto, EngineCreateServiceDto, EngineEditServiceDto, engineEditServiceDto } from './engine.s.dto';

export class EngineS {
    private readonly engineSQL: EngineSql;

    constructor() {
        this.engineSQL = new EngineSql();
    }

    public async create(data: EngineCreateServiceDto): Promise<Engine> {
        const validData = Validator.validate(engineCreateServiceDto, data, 'engine.s.create');
        return await this.engineSQL.create(validData);
    }

    public async edit(idEngine: number, data: EngineEditServiceDto): Promise<Engine> {
        const validData = Validator.validate(engineEditServiceDto, data, 'engine.s.edit');
        return await this.engineSQL.edit(idEngine, validData);
    }

    public async del(idEngine: number): Promise<Engine> {
        return await this.engineSQL.delete(idEngine);
    }
}
