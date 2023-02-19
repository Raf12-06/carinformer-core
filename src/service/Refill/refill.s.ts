import { RefillSql } from '../../database/Refill/refill.sql';
import { Refill } from '../../database/Refill/refill.e';
import { Validator } from 'nd-srv';
import {
    refillAddFuelServiceDto,
    RefillAddFuelServiceDto,
    refillFindFuelServiceDto,
    RefillFindFuelServiceDto,
    refillSetServiceDto,
    RefillSetServiceDto
} from './refill.s.dto';
import { CarSql } from '../../database/Car/car.sql';
import { Fuel } from '../../database/Fuel/fuel.e';
import { FuelSql } from '../../database/Fuel/fuel.sql';

export class RefillS {
    private readonly refillSQL: RefillSql;
    private readonly carSQL: CarSql;
    private readonly fuelSQL: FuelSql;

    constructor() {
        this.refillSQL = new RefillSql();
        this.carSQL = new CarSql();
        this.fuelSQL = new FuelSql();
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

    public async delLast(carId: number): Promise<Refill | null> {
        const lastRefill = await this.refillSQL.getLast(carId);
        if (lastRefill?.id) {
            const refillId = lastRefill.id;
            return await this.refillSQL.del(refillId);
        }
        return null;
    }

    public async addFuel(data: RefillAddFuelServiceDto): Promise<Fuel> {
        const validData: RefillAddFuelServiceDto = Validator.validate(refillAddFuelServiceDto, data, 'refill.s.addFuel');
        return await this.fuelSQL.create(validData);
    }

    public async findFuel(data: RefillFindFuelServiceDto): Promise<Fuel[]> {
        const validData: RefillFindFuelServiceDto = Validator.validate(refillFindFuelServiceDto, data, 'refill.s.findFuel');
        return await this.fuelSQL.find(validData.name);
    }
}
