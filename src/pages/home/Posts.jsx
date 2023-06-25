import React from 'react'
import { posts } from '../../data'
import Post from './components/Post';

function Posts() {
  return (
    <div className=' pt-8'>
      {posts.map(item => {
        return <Post key={item.likes} post={item} />
      })}
    </div>
  )
}

export default Posts