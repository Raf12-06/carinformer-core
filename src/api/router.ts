import { Router } from 'nd-srv';
import { markR } from './mark/markR';
import { modelR } from './model/modelR';
import { modificationR } from './modification/modificationR';

export const mainRouter = new Router({
    '/api': {
        router: {
            '/mark': markR,
            '/model': modelR,
            '/modification': modificationR,
        }
    }
});
