import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_960_720.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div className={s.item}>
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;