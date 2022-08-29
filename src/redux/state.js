const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {
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
    newMessageBody: ""
  },
  _callSubscriber() {
    console.log('rerender')
  },

  getState() {
    return this._state
  },
  subscribe(obeserver) {
    this._callSubscriber = obeserver;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.newPostsText,
        like: 1
      };
      this._state.postsData.push(newPost);
      this._state.newPostsText = '';
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.newPostsText = action.newText;
      this._callSubscriber(this._state);
    } else if ( action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.newMessageBody;
      this._state.newMessageBody = '';
      this._state.messagesData.push({ id: 4, text: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;