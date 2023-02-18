import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Engine, EngineInsert, engineInsert, engineUpdate, EngineUpdate } from './engine.e';

export class EngineSql extends BaseSQL {
    public async select(idEngine?: number): Promise<Engine[]> {
        let listEngine: Engine[] = [];
        if (idEngine) {
            listEngine = await this.db.engine.findMany({
                where: {
                    id: idEngine,
                }
            });
        } else {
            listEngine = await this.db.engine.findMany();
        }
        return listEngine;
    }

    public async create(data: EngineInsert): Promise<Engine> {
        const validData: EngineInsert = Validator.validate(engineInsert, data, 'engine.sql.create');
        return await this.db.engine.create({
            data: {
                ...validData,
            }
        })
    }

    public async edit(idEngine: number, data: EngineUpdate): Promise<Engine> {
        const validData: EngineUpdate = Validator.validate(engineUpdate, data, 'engine.sql.edit');
        return await this.db.engine.update({
            where: {
                id: idEngine,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idEngine: number): Promise<Engine> {
        return await this.db.engine.delete({
            where: {
                id: idEngine,
            }
        })
    }

    public async findMatch(name: string): Promise<Engine[]> {
        return await this.db.engine.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
