import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Modification, modificationInsert, ModificationInsert, modificationUpdate, ModificationUpdate } from './modification.e';

export class ModificationSql extends BaseSQL {
    public async select(idModification?: number): Promise<Modification[]> {
        let listModification = null;
        if (idModification) {
            listModification = await this.db.modification.findMany({
                where: {
                    id: idModification,
                }
            });
        } else {
            listModification = await this.db.modification.findMany();
        }
        return listModification;
    }

    public async create(data: ModificationInsert): Promise<Modification> {
        const { modelId, name }: ModificationInsert = Validator.validate(modificationInsert, data, 'modification.sql.create');
        return await this.db.modification.create({
            data: {
                modelId,
                name,
            }
        })
    }

    public async edit(idModification: number, data: ModificationUpdate): Promise<Modification> {
        const validData: ModificationUpdate = Validator.validate(modificationUpdate, data, 'modification.sql.edit');
        return await this.db.modification.update({
            where: {
                id: idModification,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idModification: number): Promise<Modification> {
        return await this.db.modification.delete({
            where: {
                id: idModification,
            }
        })
    }

    public async findMatch(name: string): Promise<Modification[]> {
        return await this.db.modification.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
