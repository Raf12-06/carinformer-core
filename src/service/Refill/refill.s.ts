import { RefillSql } from '../../database/Refill/refill.sql';
import { Refill } from '../../database/Refill/refill.e';
import { Validator } from 'nd-srv';
import { refillSetServiceDto, RefillSetServiceDto } from './refill.s.dto';
import { CarSql } from '../../database/Car/car.sql';

export class RefillS {
    private readonly refillSQL: RefillSql;
    private readonly carSQL: CarSql;

    constructor() {
        this.refillSQL = new RefillSql();
        this.carSQL = new CarSql();
    }

    public async set(data: RefillSetServiceDto): Promise<Refill> {
        const validData = Validator.validate(refillSetServiceDto, data, 'refill.s.setRefill');
        const carId = validData.carId;

        const car = await this.carSQL.getById(carId);
        if (!car) {
            throw new Error('Указан не корректный автомобиль');
        }
        if (car.km >= validData.km) {
            throw new Error('Указан не корректный пробег');
        }

        await this.carSQL.update(carId, { km: validData.km });

        const lastRefill = await this.refillSQL.getLast(carId);
        if (lastRefill) {
            const journeyKm = validData.km - lastRefill.km;
            validData.expense = (lastRefill.liter / journeyKm) * 100;
        }

        return await this.refillSQL.create(validData);
    }
}
