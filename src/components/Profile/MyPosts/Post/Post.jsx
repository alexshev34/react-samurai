import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/b2ecc501f15759bae96c06b9b7d6b03b.png" />
                {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}
export default Post;