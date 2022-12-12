import React from 'react';
import Title from '../../assets/logos/settings-char.png';
import SettingsLayout from '../../components/SettingsLayout';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsChar: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();
  return (
    <SettingsLayout titleImage={Title}>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={settings.char.display}
          onChange={() => setSettings({ ...settings, char: { ...settings.char, display: !settings.char.display } })}
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ml-3  font-medium text-gray-900">春日部つむぎを表示する</span>
      </label>
    </SettingsLayout>
  );
};

export default SettingsChar;
