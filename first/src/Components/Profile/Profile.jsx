import React from 'react';
import css from './Profile.module.css';
import MyPost from './MyPost/MyPost';

let Profile = () => {
  return (
    <div className={css.content}>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div>
        ava + description
    </div>
     <MyPost/>
    </div>
  );
}

export default Profile;