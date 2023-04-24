import './Post.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Post = (props) => {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-8">
          <div className="media g-mb-30 media-comment">
            <img className="g-width-50 g-height-50 image" src={props.image} alt="Profile Image" />
            <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div className="g-mb-15">
                <h5 className="h5 g-color-gray-dark-v1 mb-0">{props.firstName} {props.lastName}</h5>
                <span className="g-color-gray-dark-v4 g-font-size-12">now</span>
              </div>
              {props.message}
              <ul className="list-inline d-sm-flex my-0">
                <li className="list-inline-item g-mr-20">
                  <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <FaThumbsUp />
                    178
                  </a>
                </li>
                <li className="list-inline-item g-mr-20">
                  <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <FaThumbsDown />
                    34
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
