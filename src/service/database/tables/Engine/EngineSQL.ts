import { BaseSQL } from '../../ConnectDB';
import { Validator } from 'nd-srv';
import { EngineI, EngineScheme } from './EngineE';

export class EngineSQL extends BaseSQL {
    public async select(idEngine?: number): Promise<EngineI[]> {
        let listEngine = [];
        if (idEngine) {
            listEngine = await this.db.engine.findMany({
                where: {
                    id: idEngine,
                },
                select: {
                    id: true,
                    name: true,
                    volume: true,
                    horsepower: true,
                    mediumExpense: true,
                }
            })
        } else {
            listEngine = await this.db.engine.findMany({
                select: {
                    id: true,
                    name: true,
                    volume: true,
                    horsepower: true,
                    mediumExpense: true,
                }
            })
        }
        return listEngine;
    }

    public async create(data: Partial<EngineI>): Promise<EngineI> {
        const validData = Validator.validate(EngineScheme, data);
        return await this.db.engine.create({
            data: {
                ...validData,
            }
        })
    }

    public async edit(idEngine: number, data: Partial<EngineI>): Promise<EngineI> {
        const validData = Validator.validate(EngineScheme, data);
        return await this.db.engine.update({
            where: {
                id: idEngine,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idEngine: number): Promise<EngineI> {
        return await this.db.engine.delete({
            where: {
                id: idEngine,
            }
        })
    }

    public async findMatch(name: string): Promise<EngineI[]> {
        return await this.db.engine.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
