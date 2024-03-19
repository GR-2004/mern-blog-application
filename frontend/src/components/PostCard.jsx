import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2 bg-white'>
        <Link to={`/post/${post.slug}`} className='text-lg font-semibold text-gray-800 hover:text-teal-500 transition-colors'>
          {post.title}
        </Link>
        <span className='text-sm text-gray-500'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
