import React from 'react';
import NavbarItem from './navbarItem';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container">
                    <a className="navbar-brand" 
                    href="https://bootswatch">Ordem de Serviço</a>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarColor01" 
                        aria-controls="navbarColor01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <NavbarItem href="#/home" label="Home"/>
                            <NavbarItem href="#/" label="Login"/>
                            <NavbarItem href="#/cadastro-servidor" label="Cadastro Servidor"/>
                        </ul>
                 </div>
             </div>
        </nav>
    </div>
    );
}
export default Navbar;