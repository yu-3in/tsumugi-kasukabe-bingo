import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Rules from './pages/Rules';
import Home from './pages/Home';
import Bingo from './pages/Bingo';
import Settings from './pages/Settings';
import { AvatarProvider } from './contexts/AvatarContext';

const App: React.FC = () => {
  return (
    <AvatarProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </AvatarProvider>
  );
};

export default App;
