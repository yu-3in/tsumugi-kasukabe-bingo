import React from 'react';
import Layout from './Layout';
import Subtitle from '../assets/logos/settings.png';
import SettingsMenu from './SettingsMenu';

type Props = {
  titleImage: string;
  subtitleImage?: string;
  children: React.ReactNode;
};

const SettingsLayout: React.FC<Props> = ({ titleImage, subtitleImage = Subtitle, children }) => {
  return (
    <Layout showCredit>
      <div className="flex justify-center items-center flex-col gap-8 mt-12">
        <div className="flex justify-center items-center flex-col gap-8">
          <p className="text-3xl">
            <img src={subtitleImage} />
          </p>
          <h1>
            <img src={titleImage} className="block" />
          </h1>
        </div>
        <div className="flex w-full px-8 py-4 overflow-y-scroll h-[65vh]">
          <div className="w-8/12">{children}</div>
        </div>
        <SettingsMenu />
      </div>
    </Layout>
  );
};

export default SettingsLayout;
