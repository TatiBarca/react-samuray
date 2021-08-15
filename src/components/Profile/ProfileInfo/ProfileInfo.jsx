import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img5.goodfon.ru/wallpaper/nbig/a/8f/piony-rozovyi-tekstura.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava+Description
            </div>
        </div >
    )
};

export default ProfileInfo;