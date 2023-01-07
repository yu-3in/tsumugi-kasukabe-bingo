import React from 'react';
import Title from '../../assets/logos/settings-char.png';
import SettingsLayout from '../../components/SettingsLayout';
import SwitchButton from '../../components/SwitchButton';
import { firstVoicesConst } from '../../consts/firstVoices';
import { useAvatar } from '../../contexts/AvatarContext';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsChar: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();
  const { voice: a } = useAvatar();
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
          {settings.char.voice && (
            <div className="ml-8 mt-4">
              <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
                {firstVoicesConst.map(({ name, voice }) => (
                  <div key={name} className="grid grid-flow-col justify-between">
                    <SwitchButton
                      className="block"
                      label={name}
                      checked={settings.char.firstVoices[name]}
                      onChange={() =>
                        setSettings({
                          ...settings,
                          char: {
                            ...settings.char,
                            firstVoices: { ...settings.char.firstVoices, [name]: !settings.char.firstVoices[name] }
                          }
                        })
                      }
                    />
                    <button onClick={() => a(voice)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsChar;
