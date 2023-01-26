import { Router } from 'nd-srv';
import { userRout } from './user/userRout';
import { carRout } from './car/carRout';
import { adminRout } from './admin/adminRout';

export const mainRouter = new Router({
    '/api': {
        router: {
            '/admin': adminRout,

            '/car': carRout,
            '/user': userRout,
        }
    }
});
