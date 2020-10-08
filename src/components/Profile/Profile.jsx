import React from 'react';
import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from  './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} />
      </div>
    );
}

export default Profile;