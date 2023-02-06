import { Router } from 'nd-srv';
import { markR } from './mark/markR';

export const mainRouter = new Router({
    '/api': {
        router: {
            '/mark': markR
        }
    }
});
