import { Routes, Route } from 'react-router-dom';

import './App.css';

import About from './components/About';
import Header from './components/Header';
import SavedStocks from './components/SavedStocks';
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Stocks />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/my-stocks" element={<SavedStocks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
