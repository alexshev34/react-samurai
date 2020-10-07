import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{

  let postsElements =
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

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