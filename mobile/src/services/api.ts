import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.21:3333' // usar ip da maquina, ip acessivel da rede (disp no layout do expo)
});

export default api;