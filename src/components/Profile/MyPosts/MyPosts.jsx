import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div className={c.postBlock}>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea ></textarea>
          </div>
          <div>
          <button onclick="getValue()" >Add post</button>
          <button>Remove</button>
          </div>
        </div>
        <div className={c.posts}>
          <Post message="Hello world!"/>
        </div>
      </div>
    )
}
export default MyPosts