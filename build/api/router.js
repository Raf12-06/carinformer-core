"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const nd_srv_1 = require("nd-srv");
const userRout_1 = require("./user/userRout");
const carRout_1 = require("./car/carRout");
const adminRout_1 = require("./admin/adminRout");
exports.mainRouter = new nd_srv_1.Router({
    '/api': {
        router: {
            '/admin': adminRout_1.adminRout,
            '/car': carRout_1.carRout,
            '/user': userRout_1.userRout,
        }
    }
});
