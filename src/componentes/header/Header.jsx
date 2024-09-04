import './header.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
    <header className="header">
        <h1>Los Simuladores Online</h1>
        <nav className="navbar">
            <ul>
                <li><Link to="/temporada/1">Temporada 1</Link></li>
                <li><Link to="/temporada/2">Temporada 2</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;