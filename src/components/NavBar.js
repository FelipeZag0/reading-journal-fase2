/*
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
*/

// src/components/NavBar.js
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Página Inicial</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/add">Cadastrar</a></li>
                <li><a href="/books">Lista de Livros</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;  // Certifique-se de exportar como default
