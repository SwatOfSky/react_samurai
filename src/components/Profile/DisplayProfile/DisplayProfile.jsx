import React from "react";
import s from './DisplayProfile.module.css'

const DisplayProfile = () => {
  return (
      <div>
    <div>
      <img src='https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_960_720.jpg' />
    </div>
    <div className={s.contentBlock}>
      ava + description
    </div>
  </div>
);
}

export default DisplayProfile;