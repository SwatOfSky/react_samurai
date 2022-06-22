import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import DisplayProfile from "./DisplayProfile/DisplayProfile";


const Profile = (props) => { 

  return <div className='app-wrapper-content'>
    <DisplayProfile />
    <MyPosts postsData={props.postsData}/>
  </div>
}

export default Profile;