import { BaseSQL } from '../../system/ConnectDB';
import { ModelI, ModelSchemeUpdate, ModelSchemeInsert } from './ModelE';
import { Validator } from 'nd-srv';

export class ModelSQL extends BaseSQL {
    public async select(idModel?: number): Promise<ModelI[]> {
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

    public async create(data: Partial<ModelI>): Promise<ModelI> {
        const { markId, name } = Validator.validate(ModelSchemeInsert, data, 'ModelSQL.create');
        return await this.db.model.create({
            data: {
                markId,
                name,
            }
        })
    }

    public async edit(idModel: number, data: Partial<ModelI>): Promise<ModelI> {
        const validData = Validator.validate(ModelSchemeUpdate, data, 'ModelSQL.edit');
        return await this.db.model.update({
            where: {
                id: idModel,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idModel: number): Promise<ModelI> {
        return await this.db.model.delete({
            where: {
                id: idModel,
            }
        })
    }

    public async findMatch(name: string): Promise<ModelI[]> {
        return await this.db.model.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
