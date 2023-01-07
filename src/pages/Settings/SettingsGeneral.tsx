import React from 'react';
import Title from '../../assets/logos/settings-general.png';
import SettingsLayout from '../../components/SettingsLayout';
import SwitchButton from '../../components/SwitchButton';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsGeneral: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();

  return (
    <SettingsLayout titleImage={Title}>
      <div className="space-y-3">
        <div>
          <SwitchButton
            className="block"
            label="全画面で起動する"
            checked={settings.general.fullscreenLaunch}
            onChange={() =>
              setSettings({
                ...settings,
                general: { ...settings.general, fullscreenLaunch: !settings.general.fullscreenLaunch }
              })
            }
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsGeneral;
