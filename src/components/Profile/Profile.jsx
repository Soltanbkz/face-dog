import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={c.content}>
          <ProfileInfo firstName={props.firstName} lastName={props.lastName} />
          <MyPosts 
          firstName={props.firstName} lastName={props.lastName}
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
            image={localStorage.getItem('profileImage')}/>
      </div>
    )
}

export default Profile