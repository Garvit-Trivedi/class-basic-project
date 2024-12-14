import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Cocktail.css';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Meal</Link></li>
        <li><Link to="/Cocktail">Cocktail</Link></li>
        <li><Link to="/HarryPotter">Harry Potter</Link></li>
        <li><Link to="/Bank">Bank</Link></li>
      </ul>
    </div>
  );
};

const CocktailApp = () => {
  const [query, setQuery] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    if (query.trim() === '') return;
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  return (
    <div className="cocktail-app">
      <header className="app-header">Cocktail Finder</header>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for cocktails..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={fetchCocktails}>
          Search
        </button>
      </div>

      <div className="results-container">
        {cocktails.length === 0 && query && (
          <p className="no-results">No cocktails found. Try a different search!</p>
        )}
        {cocktails.map((drink) => (
          <div className="card" key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-img" />
            <div className="card-content">
              <h3 className="card-title">{drink.strDrink}</h3>
              <p className="card-category">{drink.strCategory}</p>
              <button
                className="card-button"
                onClick={() => alert(drink.strInstructions)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cocktail = () => {
  return (
    <div>
      <Navigation />
      <CocktailApp />
    </div>
  );
};

export default Cocktail;
