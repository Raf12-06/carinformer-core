import { CarSql } from '../../database/Car/car.sql';
import { Validator } from 'nd-srv';
import { RefillSql } from '../../database/Refill/refill.sql';
import { Replacement } from '../../database/Replacement/replacement.e';
import { ReplacementSql } from '../../database/Replacement/replacement.sql';
import { Car } from '../../database/Car/car.e';
import { Refill } from '../../database/Refill/refill.e';
import {
    carCreateServiceDto,
    CarCreateServiceDto,
    carSetRefillServiceDto,
    CarSetRefillServiceDto,
    carSetReplacementServiceDto
} from './car.s.dto';

export class CarS {
    private readonly carSQL: CarSql;

    private readonly refillSQL: RefillSql;

    constructor() {
        this.carSQL = new CarSql();
        this.refillSQL = new RefillSql();
    }

    private async setCarKm(idCar: number, km: number): Promise<void> {
        await this.carSQL.update(idCar, { km });
    }

    private async create(data: CarCreateServiceDto): Promise<Car> {
        const validData = Validator.validate(carCreateServiceDto, data, 'car.s.create');
        return await this.carSQL.create(validData);
    }

    public async setRefill(data: CarSetRefillServiceDto): Promise<Refill> {
        const validData = Validator.validate(carSetRefillServiceDto, data, 'car.s.setRefill');
        const carId = validData.carId;

        const car = await this.carSQL.getById(carId);
        if (!car) {
            throw new Error('Указан не корректный автомобиль');
        }
        if (car.km >= validData.km) {
            throw new Error('Указан не корректный пробег');
        }

        await this.setCarKm(carId, validData.km);

        const lastRefill = await this.refillSQL.getLast(carId);
        if (lastRefill) {
            const journeyKm = validData.km - lastRefill?.km;
            validData.expense = lastRefill.liter / journeyKm * 100;
        }

        return await this.refillSQL.create(validData);
    }

    public async setReplacement(data: CarSetRefillServiceDto): Promise<Replacement> {
        const validData = Validator.validate(carSetReplacementServiceDto, data, 'car.s.setReplacement');
        const replacementSQL = new ReplacementSql();
        return await replacementSQL.create(validData);
    }
}
