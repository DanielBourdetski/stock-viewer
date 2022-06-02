import { Routes, Route } from 'react-router-dom';

import './App.css';

import About from './components/About';
import Graph from './components/Graph';
import Header from './components/Header';
import SavedStocks from './components/SavedStocks';
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="App">
      <Graph />
      <Header />
      <Routes>
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/my-stocks" element={<SavedStocks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
