import { PrismaClient } from '@prisma/client'
import { Validator } from 'nd-srv';
import { ModelEntity, modelRules } from './ModelEntity';

const prisma = new PrismaClient();

const createModel = async (data: { name: string }): Promise<ModelEntity> => {
    const { name } = Validator.validate(modelRules, data);

    return await prisma.model.create({
        data: {
            name
        }
    })
}
