import React from 'react';
import css from './MyPost.module.css';
import Post from './Post/Post'

let Profile = () => {
  return (
     <div>
        My posts
      <div>
          <textarea></textarea>
          <button>Add Post</button>
      </div>
        <div>
         <Post/>
         <Post/>

        </div>
      </div>
  );
}

export default Profile;