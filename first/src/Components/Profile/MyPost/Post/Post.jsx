import React from 'react';
import css from './Post.module.css';
import logo from '../../../Header/logo.svg'


let Post = (props) => {
    return (

        <div className={css.item}>
            <img src={logo} />
            {props.message}
        </div>
    );
}

export default Post;