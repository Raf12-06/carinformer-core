export const userRout = {
    router: {
        '/': {
            url: '/api/user',
            method: 'GET',
            handler: async (data: any) => {
                const x = 12;
                return '/api/user/';
            }
        }
    }
}
