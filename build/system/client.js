"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const nd_srv_1 = require("nd-srv");
class Client extends nd_srv_1.Context {
    constructor(req, body) {
        super(req, body);
        this.user_id = 0;
    }
}
exports.Client = Client;
