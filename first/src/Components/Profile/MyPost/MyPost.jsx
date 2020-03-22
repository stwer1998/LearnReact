import React from 'react';
import css from './MyPost.module.css';
import Post from './Post/Post'

let arrayPost=[{message:"message"},{message:"message2"},{message:"message3"},{message:"message4"},{message:"message5"}]

let Profile = () => {
  return (
     <div>
        My posts
      <div>
          <textarea></textarea>
          <button>Add Post</button>
      </div>
        <div>
            {
                arrayPost.map(item=><Post message={item.message}/>)
            }
         <Post/>

        </div>
      </div>
  );
}

export default Profile;