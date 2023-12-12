import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AuctionPage from './pages/Auction'; // Ajuste o caminho se necessário

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction/:id" element={<AuctionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
