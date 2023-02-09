import { Server } from 'nd-srv';
import { Client } from './system/client';
import { mainRouter } from './api/router';
import http from 'http';

const server = new Server({
    app: http.createServer(),
    router: mainRouter,
    context: Client
})

server.request(req => {

});
server.response((err, res, data) => {
    if (err) {
        console.log(err)
        res.end(err.message)
        return;
    }

    res.end(data)
});
server.start(8000)
