import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElements = 
    props.postsData.map(p => <Post message={p.message} like={p.like} />)

  return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
      <div>
        <div>
          <div><textarea></textarea></div>
          <button>Add</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;