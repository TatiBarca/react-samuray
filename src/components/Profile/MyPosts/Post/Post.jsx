import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.it}>
        <img src='https://i.pinimg.com/originals/e0/7c/f9/e07cf9b9a8aced16c7e00930339b73be.jpg' />
        { props.message }
        
        
        <div>
            <span>Like</span>
            { props.likeCounts }
        </div>
    </div>

};

export default Post;