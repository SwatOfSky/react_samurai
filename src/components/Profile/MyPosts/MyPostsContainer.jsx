import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={state.postsData}
                        newPostsText={state.newPostsText} />
                }
            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;