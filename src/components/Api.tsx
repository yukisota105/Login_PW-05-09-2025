import axios from "axios";
const api = axios.create({
    baseURL: 'https://www.jussimarleal.com.br/apievent/public/'
})

export default api;