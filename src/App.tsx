import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Rules from './pages/Rules';
import Home from './pages/Home';
import Bingo from './pages/Bingo';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
