import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New post
        <div>
          <textarea></textarea>
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" like="12" />
        <Post message="This is my first post!" like='25' />
      </div>
    </div>
  )
}

export default MyPosts;