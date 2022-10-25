import React, { ReactNode } from 'react';
import BackgroundImage from '../assets/pop-bg.png';
import { cn } from '../utils/cn';
import Avatar from './Avatar';
import Settings from '../assets/icons/settings.png';
import { Link } from 'react-router-dom';

type Props = {
  showAvatar?: boolean;
  showSettings?: boolean;
  className?: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ showAvatar = true, showSettings = false, className, children }) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className={cn(className, 'w-screen h-screen bg-no-repeat bg-cover relative p-4')}
      >
        {children}
        {showSettings && (
          <div className="absolute right-8 top-8">
            <Link to="/settings">
              <img src={Settings} />
            </Link>
          </div>
        )}
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
