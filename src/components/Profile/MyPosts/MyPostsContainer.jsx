import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

  return (<MyPosts updateNewPostText={ onPostChange } 
                    addPost={ addPost } 
                    postsData= { state.postsData } 
                    newPostsText={ state.newPostsText }/>)
}

export default MyPostsContainer;