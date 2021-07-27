import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
        <img src="https://img5.goodfon.ru/wallpaper/nbig/a/8f/piony-rozovyi-tekstura.jpg" />
        </div>

        <div>
            ava+Description
        </div>
        <div >
            my post
        </div>
        <div>
            new post
        </div>
        <div  className={s.posts}>
            <div  >
            post1
        </div>
        <div className={s.it}>
            post2

        </div>
        </div>

    </div>
};

export default Profile;