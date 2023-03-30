import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={c.content}>
          <ProfileInfo />
          <MyPosts />
      </div>
    )
}

export default Profile