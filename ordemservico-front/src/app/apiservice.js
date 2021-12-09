import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
});

class ApiService{
    // Passar o Mapeamento no construtor /servidores
    constructor(apiurl){
        this.apiurl = apiurl;
    }
    post(url , objeto){
        return httpClient.post(this.requestUrl(url), objeto);
    }
    put(url , objeto){
        return httpClient.put(this.requestUrl(url), objeto);
    }
    deleteurl(url){
        return httpClient.delete(this.requestUrl(url));
    }
    get(url){
        return httpClient.get(this.requestUrl(url));
    }
    requestUrl(url){
        return `${this.apiurl}${url}`
    }
}

export default ApiService;