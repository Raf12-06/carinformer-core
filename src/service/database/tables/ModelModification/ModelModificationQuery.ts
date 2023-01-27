import { PrismaClient } from '@prisma/client'
import { Validator } from 'nd-srv';
import { ModelModificationEntity, modelModificationRules } from './ModelModificationEntity';

const prisma = new PrismaClient();

export const createModelModification = async (data: { modificationId: number, modelId: number }): Promise<ModelModificationEntity> => {
    const { modificationId, modelId } = Validator.validate(modelModificationRules, data);

    return await prisma.modelModification.create({
        data: {
            modificationId,
            modelId
        }
    })
}
