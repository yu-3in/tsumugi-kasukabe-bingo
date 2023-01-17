import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bingo from './pages/Bingo';
import { AvatarProvider } from './contexts/AvatarContext';
import SettingsBingo from './pages/Settings/SettingsBingo';
import SettingsGeneral from './pages/Settings/SettingsGeneral';
import SettingsChar from './pages/Settings/SettingsChar';
import { SettingsProvider } from './contexts/SettingsContext';
import SettingsSound from './pages/Settings/SettingsSound';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <AvatarProvider>
        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/bingo" element={<Bingo />} />
            <Route path="/settings">
              <Route path="general" element={<SettingsGeneral />} />
              <Route path="bingo" element={<SettingsBingo />} />
              <Route path="char" element={<SettingsChar />} />
              <Route path="sound" element={<SettingsSound />} />
            </Route>
          </Routes>
        </HashRouter>
      </AvatarProvider>
    </SettingsProvider>
  );
};

export default App;
