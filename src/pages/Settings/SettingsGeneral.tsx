import React, { useState } from 'react';
import Title from '../../assets/logos/settings-general.png';
import ConfirmModal from '../../components/ConfirmModal';
import SettingsLayout from '../../components/SettingsLayout';
import SwitchButton from '../../components/SwitchButton';
import { defaultSettingsValue } from '../../consts/settings';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';

const SettingsGeneral: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();
  const [isOpenResetModal, setIsOpenResetModal] = useState<boolean>(false);

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
      <div className="absolute right-0 left-0 bottom-16 m-auto text-center">
        <button
          className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
          onClick={() => setIsOpenResetModal(!isOpenResetModal)}
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
        >
          設定をすべてリセットする
        </button>
        <ConfirmModal
          open={isOpenResetModal}
          body={['この操作は元に戻すことができません。', <br />, '本当に実行してもよろしいでしょうか？']}
          toggleOpen={() => setIsOpenResetModal(!isOpenResetModal)}
          primaryAction={() => {
            setSettings(defaultSettingsValue);
            setIsOpenResetModal(false);
          }}
        />
      </div>
    </SettingsLayout>
  );
};

export default SettingsGeneral;
