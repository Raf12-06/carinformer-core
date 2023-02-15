import { BaseSQL } from '../../system/ConnectDB';
import { MarkI, MarkSchemeInsert, MarkSchemeUpdate } from './MarkE';
import { Validator } from 'nd-srv';

export class MarkSQL extends BaseSQL {
    public async select(idMark?: number): Promise<MarkI[]> {
        let listMark = null;
        if (idMark) {
            listMark = await this.db.mark.findMany({
                where: {
                    id: idMark,
                },
                select: {
                    id: true,
                    name: true,
                }
            })
        } else {
            listMark = await this.db.mark.findMany({
                select: {
                    id: true,
                    name: true,
                }
            })
        }
        return listMark;
    }

    public async create(data: Partial<MarkI>): Promise<MarkI> {
        const { name } = Validator.validate(MarkSchemeInsert, data, 'MarkSQL.create');
        return await this.db.mark.create({
            data: {
                name,
            }
        })
    }

    public async edit(idMark: number, data: Partial<MarkI>): Promise<MarkI> {
        const validData = Validator.validate(MarkSchemeUpdate, data, 'MarkSQL.edit');
        return await this.db.mark.update({
            where: {
                id: idMark,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idMark: number): Promise<MarkI> {
        return await this.db.mark.delete({
            where: {
                id: idMark,
            }
        })
    }

    public async findMatch(name: string): Promise<MarkI[]> {
        return await this.db.mark.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}