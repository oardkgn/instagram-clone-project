import React from 'react'
import { posts } from '../../data'
import Post from './components/Post';

function Posts() {
  return (
    <div className=' pt-8'>
      <div className=''>
      {posts.map(item => {
        return <Post key={item.likes} post={item} />
      })}
      </div>
    </div>
  )
}

export default Posts