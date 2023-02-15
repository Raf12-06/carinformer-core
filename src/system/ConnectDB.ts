import { PrismaClient } from '@prisma/client';

export class BaseSQL {
    db = new PrismaClient();
}
