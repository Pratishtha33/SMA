import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserPost = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div
      className='bg-white rounded-lg shadow-md p-4 w-1/3 mb-8'
      key={props.id}
    >
      <div className='flex items-center mb-4 justify-between'>
        <div className='flex flex-row justify-center items-center'>
          <img
            src='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='avatar'
            className='w-10 h-10 rounded-full mr-4'
          />
          <div>
            <Link
              to={`/profile/${props.username}`}
              className='hover:text-inherit'
            >
              <h4 className='font-bold text-lg'>{props.name}</h4>
            </Link>

            <p className='text-gray-600 text-sm'>{props.time}</p>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
      <p className='text-gray-700 text-base mb-4 break-words'>{props.text}</p>
      <img
        src='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='post image'
        className='w-full rounded-lg shadow-md mb-4'
      />
      <div className='flex items-center'>
        {props.likedStatus ? (
          <button
            onClick={props.like}
            className='mr-4 text-blue-500 hover:text-blue-500 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z' />
            </svg>

            {props.likes}
          </button>
        ) : (
          <button
            onClick={props.like}
            className={`mr-4 ${
              props.mujib === true
                ? 'text-blue-500'
                : 'text-gray-700 hover:text-blue-500 focus:outline-none'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z' />
            </svg>

            {props.likes}
          </button>
        )}

        <button
          onClick={handleComment}
          className='text-gray-700 hover:text-red-500 focus:outline-none mr-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z'
              clipRule='evenodd'
            />
          </svg>

          {comments}
        </button>
        <button
          onClick={handleShare}
          className='text-gray-700 hover:text-green-500 focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z' />
          </svg>

          {shares}
        </button>
      </div>
    </div>
  );
};

export default UserPost;
