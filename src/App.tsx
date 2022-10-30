import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Rules from './pages/Rules';
import Home from './pages/Home';
import Bingo from './pages/Bingo';
import { AvatarProvider } from './contexts/AvatarContext';
import SettingsBingo from './pages/Settings/SettingsBingo';
import SettingsGeneral from './pages/Settings/SettingsGeneral';
import SettingsRule from './pages/Settings/SettingsRule';
import SettingsChar from './pages/Settings/SettingsChar';
import SettingsVoice from './pages/Settings/SettingsVoice';

const App: React.FC = () => {
  return (
    <AvatarProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/settings">
            <Route path="general" element={<SettingsGeneral />} />
            <Route path="bingo" element={<SettingsBingo />} />
            <Route path="rule" element={<SettingsRule />} />
            <Route path="char" element={<SettingsChar />} />
            <Route path="voice" element={<SettingsVoice />} />
          </Route>
        </Routes>
      </HashRouter>
    </AvatarProvider>
  );
};

export default App;
