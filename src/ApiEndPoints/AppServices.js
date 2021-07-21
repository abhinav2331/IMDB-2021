import { getComingSoon, getSearch } from '../ApiConfig/api';

const Services = {
    getComingSoon: async () => {
        return await fetch(new URL(getComingSoon()), {
            method: 'GET',
            credentials: 'same-origin'
        });
    },
    getSearchs: async (searchstring) => {
        return await fetch(new URL(getSearch(searchstring)), {
            method: 'GET',
            credentials: 'same-origin'
        });
    }

}

export default Services;