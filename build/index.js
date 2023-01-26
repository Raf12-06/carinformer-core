"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nd_srv_1 = require("nd-srv");
const client_1 = require("./system/client");
const router_1 = require("./api/router");
const http_1 = __importDefault(require("http"));
const server = new nd_srv_1.Server({
    app: http_1.default.createServer(),
    router: router_1.mainRouter,
    context: client_1.Client
});
server.request(req => {
});
server.response((err, res, data) => {
    if (err) {
        console.log(err);
        res.end(err.message);
        return;
    }
    res.end(data);
});
server.start(8000);
