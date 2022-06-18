import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
  return <div className='app-wrapper-content'>
    <div>
      <img src='https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_960_720.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;