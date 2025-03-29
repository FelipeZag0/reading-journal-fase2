import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">Sobre</Button>
                <Button color="inherit" component={Link} to="/add">Cadastrar</Button>
                <Button color="inherit" component={Link} to="/books">Livros</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
