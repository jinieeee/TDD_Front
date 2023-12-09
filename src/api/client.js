import axios from 'axios';

const client = axios.create();

/* 설정 sample
    // api server
    client.defaults.baseUrl = http://localhost:80

    // 헤더 설정
    client.defaults.headers.common['Authorization'] = 'Bearer ...';
*/

export const boardGroupList = () => client.get('/group/all');

export default client;