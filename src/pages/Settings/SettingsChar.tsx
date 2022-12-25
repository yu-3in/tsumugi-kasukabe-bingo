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
      <div className="space-y-3">
        <div>
          <SwitchButton
            className="block"
            label="キャラクターを表示する"
            checked={settings.char.display}
            onChange={() => setSettings({ ...settings, char: { ...settings.char, display: !settings.char.display } })}
          />
        </div>
        <div>
          <SwitchButton
            label="キャラクターボイスをONにする"
            checked={settings.char.voice}
            onChange={() => setSettings({ ...settings, char: { ...settings.char, voice: !settings.char.voice } })}
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsChar;
