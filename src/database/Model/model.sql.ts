import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Model, modelInsert, ModelInsert, modelUpdate, ModelUpdate } from './model.e';

export class ModelSql extends BaseSQL {
    public async select(idModel?: number): Promise<Model[]> {
        let listModel = null;
        if (idModel) {
            listModel = await this.db.model.findMany({
                where: {
                    id: idModel,
                },
                select: {
                    id: true,
                    markId: true,
                    name: true,
                }
            });
        } else {
            listModel = await this.db.model.findMany({
                select: {
                    id: true,
                    markId: true,
                    name: true,
                }
            });
        }
        return listModel;
    }

    public async create(data: ModelInsert): Promise<Model> {
        const { markId, name } = Validator.validate(modelInsert, data, 'model.sql.create');
        return await this.db.model.create({
            data: {
                markId,
                name,
            }
        })
    }

    public async edit(idModel: number, data: ModelUpdate): Promise<Model> {
        const validData = Validator.validate(modelUpdate, data, 'model.sql.edit');
        return await this.db.model.update({
            where: {
                id: idModel,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idModel: number): Promise<Model> {
        return await this.db.model.delete({
            where: {
                id: idModel,
            }
        })
    }

    public async findMatch(name: string): Promise<Model[]> {
        return await this.db.model.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
