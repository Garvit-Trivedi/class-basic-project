import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Meal.css";

const Meal = () => {
    const [menu, setMenu] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchMenu = (query = "") => {
        const baseQuery = query.trim() ? query : "";
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${baseQuery}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.meals && Array.isArray(data.meals)) {
                    const menuData = data.meals.map((meal) => ({
                        id: meal.idMeal,
                        img: meal.strMealThumb,
                        title: meal.strMeal,
                        category: meal.strCategory,
                        area: meal.strArea,
                    }));
                    setMenu(menuData);
                } else {
                    console.error("No meals found in the response.");
                    setMenu([]);
                }
            })
            .catch((error) => console.log("Error fetching data:", error));
    };

    const handleButtonClick = () => {
        fetchMenu(searchQuery); // Pass the correct search query
    };

    useEffect(() => {
        fetchMenu(); // Fetch all meals initially
    }, []);

    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Meal</Link></li>
                    <li className="nav-item"><Link to="/Cocktail">Cocktail</Link></li>
                    <li className="nav-item"><Link to="/HarryPotter">HarryPotter</Link></li>
                    <li className="nav-item"><Link to="/Bank">Bank</Link></li>
                </ul>
            </nav>

            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search for anything..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleButtonClick}></button>
            </div>

            <div className="menu-container">
                <h2>Menu</h2>
                <div className="menu-list">
                    {menu.length > 0 ? (
                        menu.map((item) => (
                            <div key={item.id} className="menu-item">
                                <img src={item.img} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>Category: {item.category}</p>
                                <p>Area: {item.area}</p>
                            </div>
                        ))
                    ) : (
                        <p>No meals found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Meal;
