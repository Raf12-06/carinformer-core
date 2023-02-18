import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Mark, markInsert, MarkInsert, markUpdate, MarkUpdate } from './mark.e';

export class MarkSql extends BaseSQL {
    public async select(idMark?: number): Promise<Mark[]> {
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

    public async create(data: MarkInsert): Promise<Mark> {
        const validData: MarkInsert = Validator.validate(markInsert, data, 'mark.sql.create');
        return await this.db.mark.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(idMark: number, data: MarkUpdate): Promise<Mark> {
        const validData: MarkUpdate = Validator.validate(markUpdate, data, 'mark.sql.edit');
        return await this.db.mark.update({
            where: {
                id: idMark,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idMark: number): Promise<Mark> {
        return await this.db.mark.delete({
            where: {
                id: idMark,
            }
        })
    }

    public async findMatch(name: string): Promise<Mark[]> {
        return await this.db.mark.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
