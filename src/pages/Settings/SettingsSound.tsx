import React from 'react';
import Title from '../../assets/logos/settings-sound.png';
import SettingsLayout from '../../components/SettingsLayout';
import SwitchButton from '../../components/SwitchButton';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsSound: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();

  return (
    <SettingsLayout titleImage={Title}>
      <div className="space-y-3">
        <div>
          <SwitchButton
            className="block"
            label="すべてのサウンドをミュートする"
            checked={settings.sound.mute}
            onChange={() =>
              setSettings({
                ...settings,
                sound: { ...settings.sound, mute: !settings.sound.mute }
              })
            }
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsSound;
