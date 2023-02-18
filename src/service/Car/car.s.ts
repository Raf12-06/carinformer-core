import { CarSql } from '../../database/Car/car.sql';
import { Validator } from 'nd-srv';
import { RefillSql } from '../../database/Refill/refill.sql';
import { Car } from '../../database/Car/car.e';
import {
    carCreateServiceDto,
    CarCreateServiceDto,
} from './car.s.dto';

export class CarS {
    private readonly carSQL: CarSql;

    private readonly refillSQL: RefillSql;

    constructor() {
        this.carSQL = new CarSql();
        this.refillSQL = new RefillSql();
    }

    public async create(data: CarCreateServiceDto): Promise<Car> {
        const validData = Validator.validate(carCreateServiceDto, data, 'car.s.create');
        return await this.carSQL.create(validData);
    }
}
