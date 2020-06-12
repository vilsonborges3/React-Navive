import axios from 'axios';
//Base URL: https://free.currconv.com/api/v7/
// > /convert?q=USD_BRL&compact=ultra&apiKey=f690587b025297fdc59f
const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7'
});

export default api;