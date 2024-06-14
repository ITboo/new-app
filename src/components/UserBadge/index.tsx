import { useNavigate } from 'react-router-dom';
import './index.css';

type UserBadgeProps = {
  nickname: string;
  avatarUrl: string;
  id: string;
};
const UserBadge = ({ nickname, avatarUrl, id }: UserBadgeProps) => {
  const navigate = useNavigate();
  const onUserBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div onClick={onUserBadgeClick} className="badge__wrapper">
      {avatarUrl ? (
        <img src={avatarUrl} alt={nickname} />
      ) : (
        <div className="round" />
      )}
      <span>{nickname}</span>
    </div>
  );
};

export default UserBadge;
