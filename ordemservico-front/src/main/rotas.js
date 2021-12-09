import { Switch, Route } from 'react-router-dom';
import CadastroServidor from '../Views/cadastroServidor';
import Login from '../Views/login';
import Home from '../Views/home';


function Rotas() {
    return (      
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact={true} path="/" component={Login} />
                <Route path="/cadastro-servidor" component={CadastroServidor } />
            </Switch>

    );
}
export default Rotas;