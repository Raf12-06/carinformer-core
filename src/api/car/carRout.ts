export const carRout = {
    router: {
        '/': {
            url: '/api/car',
            method: 'GET',
            handler: async (data: any) => {
                const x = 12;
                return '/api/car/';
            }
        }
    }
}
