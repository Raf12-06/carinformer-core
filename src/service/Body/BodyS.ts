import { BodySQL } from '../database/tables/Body/BodySQL';
import { ModelBodySQL } from '../database/tables/ModelBody/ModelBodySQL';
import { Validator } from 'nd-srv';
import { BodyI, BodyScheme } from '../database/tables/Body/BodyE';
import { ModelBodyI, ModelBodyScheme } from '../database/tables/ModelBody/ModelBodyE';

export class BodyS {
    private readonly bodySQL: BodySQL;
    private readonly modelBodySQL: ModelBodySQL;

    constructor() {
        this.bodySQL = new BodySQL();
        this.modelBodySQL = new ModelBodySQL();
    }

    public async create(data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodyScheme, data);
        return await this.bodySQL.create(validData);
    }

    public async edit(idBody: number, data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodyScheme, data);
        return await this.bodySQL.edit(idBody, validData);
    }

    public async del(idBody: number): Promise<BodyI> {
        return await this.bodySQL.delete(idBody);
    }

    public async addBodyInModel(data: Partial<ModelBodyI>): Promise<ModelBodyI> {
        const validData = Validator.validate(ModelBodyScheme, data);
        return await this.modelBodySQL.create(validData);
    }

    public async delBodyFromModel(idModelBody: number): Promise<ModelBodyI> {
        return await this.modelBodySQL.delete(idModelBody);
    }
}
