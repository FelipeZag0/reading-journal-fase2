import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/add">Cadastrar</Link>
                </li>
                <li>
                    <Link to="/books">Lista de Livros</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
