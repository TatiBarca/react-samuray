import React from 'react';
import s from './Profile.module.css';
import MyPosts from '../Profile/MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://img5.goodfon.ru/wallpaper/nbig/a/8f/piony-rozovyi-tekstura.jpg" alt="" />
            </div>
            <div>
                ava+Description
            </div>
            <MyPosts />

        </div >
    )
};

export default Profile;