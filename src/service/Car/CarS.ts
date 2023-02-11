import { CarSQL } from '../database/tables/Car/CarSQL';
import { MarkSQL } from '../database/tables/Mark/MarkSQL';
import { ModelSQL } from '../database/tables/Model/ModelSQL';
import { ModificationSQL } from '../database/tables/Modification/ModificationSQL';
import { BodySQL } from '../database/tables/Body/BodySQL';
import { CarI, CarSchemeInsert, CarSchemeUpdate } from '../database/tables/Car/CarE';
import { Validator } from 'nd-srv';

export class CarS {
    private readonly carSQL: CarSQL;
    private readonly markSQL: MarkSQL;
    private readonly modelSQL: ModelSQL;
    private readonly modificationSQL: ModificationSQL;
    private readonly bodySQL: BodySQL;

    constructor() {
        this.carSQL = new CarSQL();
        this.markSQL = new MarkSQL();
        this.modelSQL = new ModelSQL();
        this.modificationSQL = new ModificationSQL();
        this.bodySQL = new BodySQL();
    }

    public async create(data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeInsert, data);
        return await this.carSQL.create(validData);
    }

    public async edit(idCar: number, data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeUpdate, data);
        return await this.carSQL.edit(idCar, validData);
    }

    public async del(idCar: number): Promise<CarI> {
        return await this.carSQL.delete(idCar);
    }
}
