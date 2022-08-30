import reducer from './reducer'

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
  },

  getState() {
    return this._state
  },
  subscribe(obeserver) {
    this._callSubscriber = obeserver;
  },
  dispatch(action) {
    this._state = reducer(this._state, action);
    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store;