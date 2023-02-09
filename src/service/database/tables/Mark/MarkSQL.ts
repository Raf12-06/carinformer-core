import { BaseSQL } from '../../ConnectDB';
import { MarkI, MarkScheme } from './MarkE';
import { Validator } from 'nd-srv';

export class MarkSQL extends BaseSQL {
    public async select(): Promise<MarkI[]> {
        return await this.db.mark.findMany({
            select: {
                id: true,
                name: true,
            }
        })
    }

    public async create(data: Partial<MarkI>): Promise<MarkI> {
        const { name } = Validator.validate(MarkScheme, data);
        return await this.db.mark.create({
            data: {
                name,
            }
        })
    }

    public async edit(idMark: number, data: Partial<MarkI>): Promise<MarkI> {
        const validData = Validator.validate(MarkScheme, data);
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
