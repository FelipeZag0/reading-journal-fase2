import React from 'react';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Página inicial</a></li>
                <li><a href="/add-book">Sobre</a></li>
                <li><a href="/book-list">Lista de livros</a></li>
                <li><a href="/book-list">Cadastrar</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
