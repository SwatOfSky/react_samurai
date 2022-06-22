import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.guim.co.uk/img/media/38b9433aa08dc7ebeaf74405b24f19f7be0078c7/0_100_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=78f3476aebe0ffd1bc5cfbc6e2ae16a2" alt="avatar" />
      {props.message}
      <div>
        <span>Likes {props.like}</span>
      </div>
    </div>
  )
}

export default Post;