import React from 'react';
import c from './ProfileInfo'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://formthereblog.files.wordpress.com/2018/03/cropped-2014-twitter-header-dimensions-21.jpg' />
      </div>
      <div className={c.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo