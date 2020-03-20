import React from 'react';
import css from './Post.module.css';
import logo from '../../../Header/logo.svg'


let Post = () => {
    return (

        <div className={css.item}>
            <img src={logo} />
            post 1
        </div>
    );
}

export default Post;