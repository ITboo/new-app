import { useState } from 'react';
import Comment from '../Comment';
import UserBadge from '../UserBadge';
import './index.css';

type DetailedCardProps = {
  userName: string;
  avatarUrl: string;
  userId: string;
  imgUrl: string;
  likes: number;
  isLikedByYou: boolean;
  comments: [];
};

const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
}: DetailedCardProps) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const onClickShowMore = () => {
    setIsCommentsShown(true);
  };

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments];
      const commentsForRender = commentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span
            onClick={() => onClickShowMore()}
          >{`Show ${comments.length - commentsForRender.length} more`}</span>
          {commentsForRender.map((comment) => (
            <Comment {...comment} />
          ))}
        </>
      );
    }
    return comments.map((comment) => <Comment {...comment} />);
  };

  return (
    <div className="detailed-card">
      <header className="detailed-card__header">
        <UserBadge nickname={userName} avatarUrl={avatarUrl} id={userId} />
      </header>
      <div className="detailed-card__img">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="buttons">
        {isLikedByYou ? (
          <svg
            viewBox="0 -1 32 32"
            version="1.1"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <title>heart-like</title> <desc>Created with Sketch Beta.</desc>{' '}
              <defs> </defs>{' '}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                {' '}
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-102.000000, -882.000000)"
                  fill="#000000"
                >
                  {' '}
                  <path
                    d="M126,882 C122.667,882 119.982,883.842 117.969,886.235 C116.013,883.76 113.333,882 110,882 C105.306,882 102,886.036 102,890.438 C102,892.799 102.967,894.499 104.026,896.097 L116.459,911.003 C117.854,912.312 118.118,912.312 119.513,911.003 L131.974,896.097 C133.22,894.499 134,892.799 134,890.438 C134,886.036 130.694,882 126,882"
                    id="heart-like"
                    sketch:type="MSShapeGroup"
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        ) : (
          <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 471.701 471.701"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>{' '}
              </g>{' '}
            </g>
          </svg>
        )}
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>comment-1</title> <desc>Created with Sketch Beta.</desc>{' '}
            <defs> </defs>{' '}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {' '}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-100.000000, -255.000000)"
                fill="#000000"
              >
                {' '}
                <path
                  d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z"
                  id="comment-1"
                  sketch:type="MSShapeGroup"
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      </div>
      <div className="detailed-card__likes">{`Liked by ${likes} people`}</div>
      <div className="detailed-card__comments">{renderComments()}</div>
      <textarea
        name=""
        id=""
        className="detailed-card__textarea"
        placeholder="Your comment"
      ></textarea>
    </div>
  );
};

export default DetailedCard;
