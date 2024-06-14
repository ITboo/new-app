import './index.css';

type CommentProps = {
  nickname: string;
  text: string;
};

const Comment = ({ nickname, text }: CommentProps) => {
  return (
    <div className="comment__wrapper">
      <span className="comment__nickname">{nickname}:</span>
      <span className="comment__text">{text}</span>
    </div>
  );
};

export default Comment;
