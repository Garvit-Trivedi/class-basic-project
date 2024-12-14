import { Link } from 'react-router-dom';

const HarryPotter = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">Meal</Link></li>
                <li><Link to="/Cocktail">Cocltail</Link></li>
                <li><Link to="/HarryPotter">HarryPotter</Link></li>
                <li><Link to="/Bank">Bank</Link></li>
            </ul>
        </div>
    )
}
export default HarryPotter;