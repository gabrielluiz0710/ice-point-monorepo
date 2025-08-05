import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/bcdc13ebd8154d499303de0521000908',
    timeout: 10000,
});
