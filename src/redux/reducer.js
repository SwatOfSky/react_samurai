const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    postsData: [
      { id: 1, message: 'Hello, World!', like: 17 },
      { id: 2, message: 'This is my first post', like: 25 }
    ],
    newPostsText: 'Text your post',
    dialogsData: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Darina' },
      { id: 3, name: 'Olga' },
      { id: 4, name: 'Natasha' },
      { id: 5, name: 'Sasha' },
      { id: 6, name: 'Dima' }
    ],
    messagesData: [
      { id: 1, text: 'Pararara' },
      { id: 2, text: 'Skibidibu' },
      { id: 3, text: 'How old are you?' }
    ],
    newMessageBody: 'Text your message'
  };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostsText,
                like: 1
              };
              state.postsData.push(newPost);
              state.newPostsText = '';
              return state; 
        case UPDATE_NEW_POST_TEXT:
            state.newPostsText = action.newText;
            return state; 
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state; 
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({ id: 4, text: body });
            state.newMessageBody = '';
            return state; 
        default:
            return state; 
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default reducer;