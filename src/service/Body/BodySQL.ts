import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { BodyI, BodySchemeUpdate, BodySchemeInsert } from './BodyE';

export class BodySQL extends BaseSQL {
    public async select(idBody?: number): Promise<BodyI[]> {
        let listBody: BodyI[] = [];
        if (idBody) {
            listBody = await this.db.body.findMany({
                where: {
                    id: idBody,
                },
                select: {
                    id: true,
                    name: true,
                    modelId: true
                }
            })
        } else {
            listBody = await this.db.body.findMany({
                select: {
                    id: true,
                    name: true,
                    modelId: true,
                }
            })
        }
        return listBody;
    }

    public async create(data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodySchemeInsert, data, 'BodySQL.create');
        return await this.db.body.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idBody: number, data: Partial<BodyI>): Promise<BodyI> {
        const validData = Validator.validate(BodySchemeUpdate, data, 'BodySQL.edit');
        return await this.db.body.update({
            where: {
                id: idBody,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idBody: number): Promise<BodyI> {
        return await this.db.body.delete({
            where: {
                id: idBody,
            }
        })
    }

    public async findMatch(name: string): Promise<BodyI[]> {
        return await this.db.body.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
