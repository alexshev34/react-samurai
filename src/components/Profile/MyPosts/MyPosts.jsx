import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{

  let postsElements =
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

    return(
        <div>My Posts
          <div>
              <textarea ref={newPostElement} ></textarea>
              <button onClick={ addPost } >Add Post</button>
              <button>Remove</button>
          </div>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>
    );
}
export default MyPosts;