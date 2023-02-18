import { BaseSQL } from '../../system/ConnectDB';
import { Validator } from 'nd-srv';
import { Body, bodyUpdate, bodyInsert, BodyInsert, BodyUpdate } from './body.e';

export class BodySql extends BaseSQL {
    public async select(idBody?: number): Promise<Body[]> {
        let listBody: Body[] = [];
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

    public async create(data: BodyInsert): Promise<Body> {
        const validData: BodyInsert = Validator.validate(bodyInsert, data, 'Body.sql.create');
        return await this.db.body.create({
            data: {
                ...validData
            }
        })
    }

    public async edit(bodyId: number, data: BodyUpdate): Promise<Body> {
        const validData: BodyUpdate = Validator.validate(bodyUpdate, data, 'Body.sql.edit');
        return await this.db.body.update({
            where: {
                id: bodyId,
            },
            data: {
                ...validData,
            }
        })
    }

    public async delete(idBody: number): Promise<Body> {
        return await this.db.body.delete({
            where: {
                id: idBody,
            }
        })
    }

    public async findMatch(name: string): Promise<Body[]> {
        return await this.db.body.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }
}
