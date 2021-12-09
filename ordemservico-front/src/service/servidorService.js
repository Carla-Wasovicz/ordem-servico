import ApiService from "../app/apiservice";

class servidorService extends ApiService{
    constructor(){
        super('/servidores');
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }
    salvar(servidor){
        return this.post('/',servidor);
    }
}

export default servidorService;
