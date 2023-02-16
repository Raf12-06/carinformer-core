import { CarSQL } from '../database/Car/CarSQL';
import { CarI, CarSchemeInsert } from '../database/Car/CarE';
import { Validator } from 'nd-srv';
import { RefillI, RefillSchemeInsert } from '../database/Refill/RefillE';
import { RefillSQL } from '../database/Refill/RefillSQL';
import { ReplacementI } from '../database/Replacement/ReplacementE';
import { ReplacementTypeSchemeInsert } from '../database/ReplacementType/ReplacementTypeE';
import { ReplacementSQL } from '../database/Replacement/ReplacementSQL';

export class CarS {
    private readonly carSQL: CarSQL;

    private readonly refillSQL: RefillSQL;

    constructor() {
        this.carSQL = new CarSQL();
        this.refillSQL = new RefillSQL();
    }

    private async setCarKm(idCar: number, km: number): Promise<void> {
        await this.carSQL.update(idCar, { km });
    }

    private async create(data: Partial<CarI>): Promise<CarI> {
        const validData = Validator.validate(CarSchemeInsert, data, 'CarS.create');
        return await this.carSQL.create(validData);
    }

    public async setRefill(data: RefillI): Promise<RefillI> {
        const validData = Validator.validate(RefillSchemeInsert, data, 'CarS.setRefill');
        const carId = data.carId;

        const car = await this.carSQL.getById(data.carId);
        if (!car) {
            throw new Error('Указан не корректный автомобиль');
        }
        if (car.km >= data.km) {
            throw new Error('Указан не корректный пробег');
        }

        await this.setCarKm(carId, data.km);

        const lastRefill = await this.refillSQL.getLast(carId);
        const journeyKm = data.km - lastRefill.km;
        validData.expense = lastRefill.liter / journeyKm * 100;

        return await this.refillSQL.create(validData);
    }

    public async setReplacement(data: Partial<ReplacementI>): Promise<ReplacementI> {
        const validData = Validator.validate(ReplacementTypeSchemeInsert, data, 'CarS.setReplacement');
        const replacementSQL = new ReplacementSQL();
        return await replacementSQL.create(validData);
    }
}
