import { Client } from '../../system/client';
import { Car } from '../../service/car/carQuery';

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
                    preHandler: async (client: Client) => {
                        console.log('preHandler');
                    },
                    handler: async (data: any) => {
                        const car = new Car();
                        return await car.createCar();
                    },
                    postHandler: async (client: Client) => {
                        // client.setCookie('mark', client.body.name);
                        console.log('postHandler');
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
