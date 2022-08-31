import React from "react";
import DisplayProfile from "./DisplayProfile/DisplayProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => { 
  return <div className='app-wrapper-content'>
    <DisplayProfile />
    <MyPostsContainer store={props.store} />
  </div>
}

export default Profile;