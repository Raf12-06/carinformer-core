import { PrismaClient } from '@prisma/client';
import { Validator } from 'nd-srv';
import { CarEntity, carRules } from './CarEntity';

const prisma = new PrismaClient();

export const createCar = async (data: Partial<CarEntity>): Promise<CarEntity> => {
    const { markModelId, engineId } = Validator.validate(carRules, data);

    return await prisma.car.create({
        data: {
            markModelId,
            engineId
        }
    })
}
