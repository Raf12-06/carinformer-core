import { PrismaClient } from '@prisma/client'
import { Validator } from 'nd-srv';
import { MarkEntity, markRules } from './MarkEntity';

const prisma = new PrismaClient();

export const createMark = async (data: Partial<MarkEntity>): Promise<MarkEntity> => {
    const { name, description } = Validator.validate(markRules, data);

    return await prisma.mark.create({
        data: {
            name,
            description
        }
    })
}
