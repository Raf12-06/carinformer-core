import { CarSQL } from './CarSQL';
import { CarI, CarSchemeInsert } from './CarE';
import { Validator } from 'nd-srv';

export class CarS {
    private readonly carSQL: CarSQL;

    constructor() {
        this.carSQL = new CarSQL();
    }

    private async create(data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeInsert, data, 'CarS.create');
        return await this.carSQL.create(validData);
    }
}
