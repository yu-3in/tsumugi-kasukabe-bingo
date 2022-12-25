import React from 'react';
import Title from '../../assets/logos/settings-sound.png';
import SettingsLayout from '../../components/SettingsLayout';

const SettingsSound: React.FC = () => {
  return (
    <SettingsLayout titleImage={Title}>
      <div className="text-xl">設定するものはまだありません。今後のアップデートで追加予定です。</div>
    </SettingsLayout>
  );
};

export default SettingsSound;
