import { Client } from '../../system/client';
import { MarkSQL } from '../../service/database/tables/Mark/MarkSQL';

export const markR = {
    router: {
        '/create': {
            url: '/api/mark/create',
            method: 'POST',
            schema: {
                name: {
                    type: 'string',
                    require: true,
                    reference: {
                        length: {
                            min: 3,
                            max: 15,
                        }
                    }
                }
            },
            async preHandler(client: Client): Promise<void> {

            },
            async handler(data: any): Promise<any> {
                const { name } = data;
                const markSQL = new MarkSQL();
                return await markSQL.create({ name });
            },
            async postHandler(client: Client): Promise<void> {

            }
        },
        '/edit': {
            url: '/api/mark/edit',
            method: 'POST',
            schema: {
                id: {
                    type: 'number',
                    require: true,
                    reference: {
                        length: {
                            min: 1
                        }
                    }
                },
                name: {
                    type: 'string',
                    require: true,
                    reference: {
                        length: {
                            min: 3,
                            max: 15,
                        }
                    }
                }
            },
            async handler(data: any): Promise<any> {
                const markSQL = new MarkSQL();
                const idMark = data.id;
                return await markSQL.edit(idMark, data);
            }
        }
    }
}
