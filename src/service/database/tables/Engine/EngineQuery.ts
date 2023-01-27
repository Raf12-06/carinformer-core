import { PrismaClient } from '@prisma/client'
import { Validator } from 'nd-srv';
import { EngineEntity, engineRules } from './EngineEntity';

const prisma = new PrismaClient();

export const createEngine = async (data: Partial<EngineEntity>): Promise<any> => {
    const { name, volume, horsepower, mediumExpense } = Validator.validate(engineRules, data);

    return await prisma.engine.create({
        data: {
            name,
            volume,
            horsepower,
            mediumExpense,
        }
    })
}
