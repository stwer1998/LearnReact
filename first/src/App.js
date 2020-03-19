import React from 'react';
import logo from './logo.svg';
import './App.css';


let App = () => {

  return (    
    <div className='app-wrapper'>
      <header className='header'>
        <img src={logo} />
      </header>
      <nav className='nav'>
      <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div><div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>       
      </nav>
      <div className='content'>
      <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
