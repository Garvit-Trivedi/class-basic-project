
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Meal from './parts/Home/Meal.jsx';
import Cocktail from './parts/Cocktail.jsx';
import HarryPotter from './parts/HarryPotter.jsx';
import Bank from './parts/Bank.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/Cocktail" element={<Cocktail />} /> 
          <Route path="/HarryPotter" element={<HarryPotter />} />   
          <Route path="/Bank" element={<Bank />} />   
        </Routes>
      </Router>
    </>
  );
}

export default App;
