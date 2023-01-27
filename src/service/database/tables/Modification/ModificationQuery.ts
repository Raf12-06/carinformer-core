import { PrismaClient } from '@prisma/client'
import { Validator } from 'nd-srv';
import { ModificationEntity, modificationRules } from './ModificationEntity';

const prisma = new PrismaClient();

export const createModification = async (data: { name: string }): Promise<ModificationEntity> => {
    const { name } = Validator.validate(modificationRules, data);

    return await prisma.modification.create({
        data: {
            name
        }
    })
}
