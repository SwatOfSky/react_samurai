import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id:1, message: 'Hello, World!', like: 17},
  {id:2, message: 'This is my first post', like: 25}
]

let dialogsData = [
  {id:1, name: 'Dima'},
  {id:2, name: 'Darina'},
  {id:3, name: 'Olga'},
  {id:4, name: 'Natasha'},
  {id:5, name: 'Sasha'},
  {id:6, name: 'Dima'}
]

let messagesData = [
  {id:1, text: 'Pararara'},
  {id:2, text: 'Skibidibu'},
  {id:3, text: 'How old are you?'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
