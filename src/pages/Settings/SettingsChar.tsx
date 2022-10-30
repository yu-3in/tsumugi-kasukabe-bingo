import React from 'react';
import Title from '../../assets/logos/settings-char.png';
import SettingsLayout from '../../components/SettingsLayout';

const SettingsChar: React.FC = () => {
  return (
    <SettingsLayout titleImage={Title}>
      <div className="text-xl">設定するものはまだありません。今後のアップデートで追加予定です。</div>
    </SettingsLayout>
  );
};

export default SettingsChar;
