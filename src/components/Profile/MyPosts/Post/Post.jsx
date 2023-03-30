import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src='https://i.pinimg.com/originals/20/b4/d7/20b4d78e3c4922221c969866e5878aeb.jpg' />
      <div>
        <div>
        {props.message}
        </div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post