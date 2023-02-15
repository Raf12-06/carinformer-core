import { Router } from 'nd-srv';
import { markR } from './mark/markR';
import { modelR } from './model/modelR';
import { modificationR } from './modification/modificationR';
import { bodyR } from './body/bodyR';
import { engineR } from './engine/engineR';
import { carR } from './car/carR';

export const mainRouter = new Router({
    '/api': {
        router: {
            '/mark': markR,
            '/model': modelR,
            '/modification': modificationR,
            '/body': bodyR,
            '/engine': engineR,
            '/car': carR,
        }
    }
});
