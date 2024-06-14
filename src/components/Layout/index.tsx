import { ReactNode } from 'react';
import Navbar from '../Navbar';

import './index.css';

type LayoutProps = {
  nickname: string;
  avatarUrl: string;
  id: string;
  children?: ReactNode;
};

const Layout = ({ nickname, avatarUrl, id, children }: LayoutProps) => {
  return (
    <div className="app__layout">
      <header>
        <Navbar nickname={nickname} avatarUrl={avatarUrl} id={id} />
      </header>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
