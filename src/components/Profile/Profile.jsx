import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from  './Profile.module.css';

const Profile = () => {
    return(
        <div>
            <div>
                <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/d7df2472e9ce5de534a2fea9720e5a93.jpg"/>
            </div> 
            <div>
                ava + description
            </div>
            <MyPosts/>
      </div>
    );
}

export default Profile;