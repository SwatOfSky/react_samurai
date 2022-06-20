import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import DisplayProfile from "./DisplayProfile/DisplayProfile";

const Profile = () => {
  return <div className='app-wrapper-content'>
    <DisplayProfile />
    <MyPosts />
  </div>
}

export default Profile;