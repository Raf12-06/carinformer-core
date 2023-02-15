import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { ModificationI, ModificationSchemeUpdate, ModificationSchemeInsert } from './ModificationE';

export class ModificationSQL extends BaseSQL {
    public async select(idModification?: number): Promise<ModificationI[]> {
        let listModification = null;
        if (idModification) {
            listModification = await this.db.modification.findMany({
                where: {
                    id: idModification,
                },
                select: {
                    id: true,
                    modelId: true,
                    name: true,
                }
            });
        } else {
            listModification = await this.db.modification.findMany({
                select: {
                    id: true,
                    modelId: true,
                    name: true,
                }
            });
        }
        return listModification;
    }

    public async create(data: Partial<ModificationI>): Promise<ModificationI> {
        const { modelId, name } = Validator.validate(ModificationSchemeInsert, data, 'ModificationSQL.create');
        return await this.db.modification.create({
            data: {
                modelId,
                name,
            }
        })
    }

    public async edit(idModification: number, data: Partial<ModificationI>): Promise<ModificationI> {
        const validData = Validator.validate(ModificationSchemeUpdate, data, 'ModificationSQL.edit');
        return await this.db.modification.update({
            where: {
                id: idModification,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idModification: number): Promise<ModificationI> {
        return await this.db.modification.delete({
            where: {
                id: idModification,
            }
        })
    }

    public async findMatch(name: string): Promise<ModificationI[]> {
        return await this.db.modification.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
