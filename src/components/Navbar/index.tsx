import './index.css';
import UserBadge from '../UserBadge';

type NavbarProps = {
  nickname: string;
  avatarUrl: string;
  id: string;
};

const Navbar = ({ nickname, avatarUrl, id }: NavbarProps) => {
  return (
    <nav className="menu">
      <h1>Memegram</h1>
      <UserBadge nickname={nickname} avatarUrl={avatarUrl} id={id} />
    </nav>
  );
};

export default Navbar;
