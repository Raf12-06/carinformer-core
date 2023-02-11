import { BaseSQL } from '../../ConnectDB';
import { ModelBodyI, ModelBodyScheme } from './ModelBodyE';
import { Validator } from 'nd-srv';

export class ModelBodySQL extends BaseSQL {
    public async selectModelBodies(idModel: number): Promise<ModelBodyI[]> {
        return await this.db.modelBody.findMany({
            where: {
                modelId: idModel
            }
        })
    }

    public async create(data: Partial<ModelBodyI>): Promise<ModelBodyI> {
        const validData = Validator.validate(ModelBodyScheme, data);
        return await this.db.modelBody.create({
            data: {
                ...validData
            }
        });
    }

    public async delete(idModelBody: number): Promise<ModelBodyI> {
        return await this.db.modelBody.delete({
            where: {
                id: idModelBody
            }
        })
    }
}
