import { PrismaClient } from '@prisma/client'

const db = new PrismaClient();

export class Car {
    public async createCar(): Promise<any> {
        return await db.markModel.create({
            data: {
                marks: {
                    create: { name: 'hello', description: 'fsdfsdgsdgsdgsdg' },
                },
                models: {
                    create: { name: 'fdsfdfsdf', description: 'fsfsgsgsdg' },
                }
            }
        })
    }
}
