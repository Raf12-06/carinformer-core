import { MarkModelEntity, markModelRules } from './MarkModelEntity';
import { PrismaClient } from '@prisma/client';
import { Validator } from 'nd-srv';

const prisma = new PrismaClient();

export const createMarkModel = async (data: { markId: number, modelModificationId: number }): Promise<MarkModelEntity> => {
    const { markId, modelModificationId } = Validator.validate(markModelRules, data);

    return await prisma.markModel.create({
        data: {
            markId,
            modelModificationId
        }
    })
}
