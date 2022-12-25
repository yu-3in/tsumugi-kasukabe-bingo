import React from 'react';
import Title from '../../assets/logos/settings-char.png';
import SettingsLayout from '../../components/SettingsLayout';
import SwitchButton from '../../components/SwitchButton';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsChar: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();
  return (
    <SettingsLayout titleImage={Title}>
      <SwitchButton
        label="キャラクターを表示する"
        checked={settings.char.display}
        onChange={() => setSettings({ ...settings, char: { ...settings.char, display: !settings.char.display } })}
      />
    </SettingsLayout>
  );
};

export default SettingsChar;
