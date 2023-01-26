"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRout = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.adminRout = {
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
                    handler: (data) => __awaiter(void 0, void 0, void 0, function* () {
                        const { name, description } = data;
                        const id = yield prisma.mark.create({
                            data: {
                                name,
                                description,
                            }
                        });
                        return id;
                    }),
                    postHandler: (client) => __awaiter(void 0, void 0, void 0, function* () {
                        client.setCookie('mark', client.body.name);
                    })
                }
            }
        },
        '/user': {
            router: {
                '/': {
                    url: '/api/admin/user',
                    method: 'GET',
                    handler: (data) => __awaiter(void 0, void 0, void 0, function* () {
                        const x = 12;
                        return '/api/admin/user';
                    })
                }
            }
        }
    }
};
