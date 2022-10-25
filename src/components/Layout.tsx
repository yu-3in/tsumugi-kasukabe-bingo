import React, { ReactNode } from 'react';
import BackgroundImage from '../assets/pop-bg.png';
import { cn } from '../utils/cn';
import Avatar from './Avatar';

type Props = {
  showAvatar?: boolean;
  className?: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ showAvatar = true, className, children }) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className={cn(className, 'w-screen h-screen bg-no-repeat bg-cover relative p-4')}
      >
        {children}
        {showAvatar && (
          <div className="absolute right-8 -bottom-60">
            <Avatar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
