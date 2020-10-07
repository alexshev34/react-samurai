import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{

  let posts = [
    {id: 1, message: 'Hi, how are you ?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
]

  let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    return(
        <div>My Posts
          <div>
              <textarea></textarea>
              <button>Add Post</button>
              <button>Remove</button>
          </div>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>
    );
}
export default MyPosts;