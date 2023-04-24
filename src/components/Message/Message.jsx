import React from 'react'
import './Message.css'
import { FaSearch, FaPaperPlane } from 'react-icons/fa';


const Message = (props) => {
    

    return (
        <div class="message message-right">
                  <div class="avatar">
                      <img class="img-circle avatar" alt="chat avatar" src={props.image} />
                  </div>
                  <div class="message-text-wrapper">
                      <div class="message-text">
                          Basic panel example awesome one bewsom Basic panel example awesome
                      </div>
                  </div>
                  <p class="time-stamp"><i class="fa fa-check"></i> Now</p>
              </div>
    )
}


export default Message