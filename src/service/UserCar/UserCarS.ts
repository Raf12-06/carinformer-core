import { CarI, CarSchemeInsert, CarSchemeUpdate } from '../database/tables/Car/CarE';
import { Validator } from 'nd-srv';
import { UserCarSQL } from '../database/tables/UserCar/UserCarSQL';
import { UserCarI } from '../database/tables/UserCar/UserCarE';
import { CarS } from '../Car/CarS';
import { CarSQL } from '../database/tables/Car/CarSQL';

export class UserCarS {
    private readonly userCarSQL: UserCarSQL;
    private readonly carSQL: CarSQL;
    private readonly carS: CarS;

    constructor() {
        this.userCarSQL = new UserCarSQL();
        this.carSQL = new CarSQL();
        this.carS = new CarS();
    }

    public async create(data: Partial<CarI>): Promise<UserCarI> {
        const validData = Validator.validate(CarSchemeInsert, data, 'UserCarS.create');
        const newCar = {
            markId: validData.markId,
            modelId: validData.modelId,
            modificationId: validData.modificationId,
            bodyId: validData.bodyId,
            engineId: validData.engineId
        }

        const listCar = await this.carSQL.select(newCar);

        let idCar = 0;
        if (!listCar.length) {
            const car = await this.carS.create(newCar)
            idCar = car.id;
        } else {
            const [car] = listCar;
            idCar = car.id;
        }

        return await this.userCarSQL.create({
            userId: 1,
            carId: idCar
        });
    }

    public async edit(idUserCar: number, data: Partial<CarI>): Promise<UserCarI> {
        const validData = Validator.validate(CarSchemeUpdate, data, 'UserCarS.edit');

        const listCurrUserCar = await this.userCarSQL.select({
            id: idUserCar
        });
        const [currUserCar] = listCurrUserCar;
        const idCar = currUserCar.carId;

        const listCurrCar = await this.carSQL.select({
            id: idCar
        });
        const [currCar] = listCurrCar;

        const newCar = {
            markId: validData?.markId ? validData.markId : currCar.markId,
            modelId: validData?.modelId ? validData.modelId : currCar.modelId,
            modificationId: validData?.modificationId ? validData.modificationId : currCar.modificationId,
            bodyId: validData?.bodyId ? validData.bodyId : currCar.bodyId,
            engineId: validData?.engineId ? validData.engineId : currCar.engineId,
        }

        const listCar = await this.carSQL.select(newCar);

        let idNewCar = 0;
        if (!listCar.length) {
            const car = await this.carS.create(newCar)
            idNewCar = car.id;
        } else {
            const [car] = listCar;
            idNewCar = car.id;
        }

        return await this.userCarSQL.edit(idUserCar, {
            carId: idNewCar
        });
    }
}
