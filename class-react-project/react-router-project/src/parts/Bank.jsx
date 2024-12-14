import { Link } from 'react-router-dom';
// import "./Search.css";

const Bank = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Meal</Link></li>
                <li><Link to="/Cocktail">Cocltail</Link></li>
                <li><Link to="/HarryPotter">HarryPotter</Link></li>
                <li><Link to="/Bank">Bank</Link></li>
            </ul>
        </nav>
        
    );
}

export default Bank;