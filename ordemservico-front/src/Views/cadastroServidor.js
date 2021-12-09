import React from "react";
import Card from "../Components/card";
import FormGroup from "../Components/form-group";
import servidorService from "../service/servidorService";
import {messageError, messageSuccess} from '../Components/toastr';

class CadastroServidor extends React.Component {

    constructor(){
        super();
        this.service = new servidorService();
    }
    state = {
        nome:'',
        telefone:'',
        email:'',
        senha:''
    }
    salvar = ()  => {
        const servidor = {
            nome:this.state.nome,
            telefone:this.state.telefone,
            email:this.state.email,
            senha:this.state.senha
        }
        this.service.salvar(servidor)
                    .then(Response => {
                        messageSuccess('Servidor cadastrado com sucesso! Login habilitado');
                        this.props.history.push('/');
                    }).catch (error => {
                        messageError(error.response.data.message)
                    })
    }

    render() {
        return (
            <Card title="Cadastro de Servidores">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">

                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" id="inputNome" name="nome"
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={e => this.setState({nome: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="text" id="inputTelefone" name="telefone"
                                    className="form-control"
                                    value={this.state.telefone}
                                    onChange={e => this.setState({telefone: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text" id="inputEmail" name="email"
                                    className="form-control" 
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" id="inputSenha" name="senha"
                                    className="form-control" 
                                    value={this.state.senha}
                                    onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" id="inputRepitaSenha" name="senha"
                                    className="form-control" />
                            </FormGroup>
                            <button type="button" className="btn btn-success"
                                style={{ margin: '4px 4px 0 0' }}
                                onClick={this.salvar}>Salvar</button>
                            <button type="button" className="btn btn-danger"
                                style={{ margin: '4px 0 0 0' }}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}
export default CadastroServidor;