import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = 
    props.postsData.map(p => <Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

  return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
      <div>
        <div>
          <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostsText} placeholder='enter your post'/></div>
          <button onClick={ onAddPost }>Add</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;