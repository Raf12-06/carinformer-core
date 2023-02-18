import { Router } from 'nd-srv';
import { markRout } from './mark/mark.rout';
import { modelRout } from './model/model.rout';
import { modificationRout } from './modification/modification.rout';
import { bodyRout } from './body/body.rout';
import { engineRout } from './engine/engine.rout';
import { carRout } from './car/car.rout';

export const mainRouter = new Router({
    '/api': {
        router: {
            '/mark': markRout,
            '/model': modelRout,
            '/modification': modificationRout,
            '/body': bodyRout,
            '/engine': engineRout,
            '/car': carRout,
        }
    }
});
