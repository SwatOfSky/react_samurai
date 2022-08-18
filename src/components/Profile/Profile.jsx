import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import DisplayProfile from "./DisplayProfile/DisplayProfile";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => { 

  return <div className='app-wrapper-content'>
    <DisplayProfile />
    <MyPosts postsData={props.postsData}
             newPostsText={props.newPostsText}
             dispatch={props.dispatch}/>
  </div>
}

export default Profile;