import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        my post
        <div>
            <textarea></textarea>
            <button>Add post</button>
            
        </div>
        <div className={s.posts}>
            <Post  message='Hi its Tommy' likeCounts=" 5"/>
            <Post  message='I am Fluffy' likeCounts=" 10" />
            <Post message='How are you?' likeCounts=" 33"/>
            <Post message="it's my first post" likeCounts=" 25"/>
            <Post message="Let's have fun" likeCounts=" 40"/>
            
            
        </div>
    </div>

};

export default MyPosts;