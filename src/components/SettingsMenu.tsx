import React from 'react';
import { NavLink } from 'react-router-dom';

const SettingsMenu: React.FC = () => {
  return (
    <div>
      <div className="absolute -right-[12rem] -bottom-[17rem] w-[42rem] h-[42rem] bg-[#BDBFF4]/[.45] rounded-full z-10"></div>
      <div className="absolute -right-[18rem] -bottom-[14rem] w-[42rem] h-[42rem] bg-[#BDBFF4]/[.45] rounded-full z-10">
        <div className="p-4">
          <ul className="text-white text-center text-3xl space-y-4 absolute left-[20%] top-[25%]">
            <li>
              <NavLink to="/settings/general" className={({ isActive }) => (isActive ? 'text-[#626487]' : undefined)}>
                一般
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/bingo" className={({ isActive }) => (isActive ? 'text-[#626487]' : undefined)}>
                ビンゴ
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/char" className={({ isActive }) => (isActive ? 'text-[#626487]' : undefined)}>
                キャラクター
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/voice" className={({ isActive }) => (isActive ? 'text-[#626487]' : undefined)}>
                ボイス
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
