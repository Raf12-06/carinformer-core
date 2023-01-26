import { PrismaClient } from '@prisma/client'
import { Client } from '../../system/client';

const db = new PrismaClient()

export const adminRout = {
    router: {
        '/car': {
            router: {
                '/add-mark': {
                    url: '/api/admin/car/add-mark',
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
                        },
                        description: {
                            type: 'string',
                            require: true,
                            reference: {
                                length: {
                                    min: 10,
                                    max: 255,
                                }
                            }
                        }
                    },
                    handler: async (data: any) => {
                        const { name, description } = data;
                        const id = await db.mark.create({
                            data: {
                                name,
                                description,
                            }
                        });
                        return id;
                    },
                    postHandler: async (client: Client) => {
                        client.setCookie('mark', client.body.name);
                    }
                }
            }
        },
        '/user': {
            router: {
                '/': {
                    url: '/api/admin/user',
                    method: 'GET',
                    handler: async (data: any) => {
                        const x = 12;
                        return '/api/admin/user'
                    }
                }
            }
        }
    }
}
