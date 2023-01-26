import { Context } from 'nd-srv';
import { IncomingMessage } from 'http';

export class Client extends Context {
    user_id = 0;

    constructor (req: IncomingMessage, body: any) {
        super(req, body);
    }
}
