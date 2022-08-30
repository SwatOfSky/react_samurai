import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/reducer";

const MyPosts = (props) => {
  let postsElements = 
    props.postsData.map(p => <Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    };

  return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
      <div>
        <div>
          <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='enter your post'/></div>
          <button onClick={ addPost }>Add</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;