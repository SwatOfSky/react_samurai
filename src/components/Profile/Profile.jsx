import React from "react";
import DisplayProfile from "./DisplayProfile/DisplayProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => { 
  return <div className='app-wrapper-content'>
    <DisplayProfile />
    <MyPostsContainer />
  </div>
}

export default Profile;