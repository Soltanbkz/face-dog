import React from 'react';
import c from './MyPosts.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  const [newPostText, setNewPostText] = React.useState(props.newPostText);

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} image={props.image} firstName={props.firstName} lastName={props.lastName}/>)

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  
  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    setNewPostText(text);
  }
  
  return (
    <>
    <div class="container bootstrap snippets bootdey mt-5">
    <div class="row">
        <div class="col-md-offset-3 col-md-6 col-xs-12">
            <div class="well well-sm well-social-post">
        <form>
            <textarea 
            className="form-control"
            onChange={onPostChange}
            placeholder='Enter text' 
            value={newPostText}
          />
            <ul class='list-inline post-actions'>
               <button className="btn btn-primary btn-xs" onClick={ addPost }>Add post</button>
            </ul>
        </form>
            </div>
        </div>
    </div>
    <div className={c.posts}>
        {postsElements}
      </div>
</div>    
    </>
  )
}

export default MyPosts;












