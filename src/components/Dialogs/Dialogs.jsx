import DialogItem from '../DialogItems/DialogItems';
import Message from '../Message/Message';
import React from 'react';
import './Dialogs.css'

const Dialogs = (props) => {

    return (
      <div class="col-md-12 col-lg-12 col-md-offset-3">
      <div class="panel panel-default chat-widget">
          <div class="panel-heading">
              <h3 class="panel-title"><i class="fa fa-comments"></i> Chat</h3>
          </div>
          <div class="panel-body">
              <div class="message">
                  <div class="avatar">
                      <img class="img-circle avatar" alt="chat avatar" src="https://avatars.mds.yandex.net/i?id=d5b30230aac2937d46c62cf7bbfab7384739cd45-5232384-images-thumbs&ref=rim&n=33&w=169&h=169" />
                  </div>
                  <div class="message-text-wrapper">
                      <div class="message-text">
                          Basic panel example awesome one bewsom Basic panel example awesome
                      </div>
                  </div>
                  <p class="time-stamp"><i class="fa fa-check"></i> 5 minute ago</p>
              </div>

              <div class="message message-right">
                  <div class="avatar">
                      <img class="img-circle avatar" alt="chat avatar" src={props.image} />
                  </div>
                  <div class="message-text-wrapper">
                      <div class="message-text">
                          Basic panel example awesome one bewsom Basic panel example awesome
                      </div>
                  </div>
                  <p class="time-stamp"><i class="fa fa-check"></i> 2 minute ago</p>
              </div>

              <div class="message">
                  <div class="avatar">
                      <img class="img-circle avatar" alt="chat avatar" src="https://avatars.mds.yandex.net/i?id=d5b30230aac2937d46c62cf7bbfab7384739cd45-5232384-images-thumbs&ref=rim&n=33&w=169&h=169" />
                  </div>
                  <div class="message-text-wrapper">
                      <div class="message-text">
                          <a href="#" title="Singapore cityscape" data-gallery="">
                              <img src="https://www.bootdey.com/image/200x320/" alt="singapore pic" /></a>
                      </div>
                  </div>
                  <p class="time-stamp"><i class="fa fa-check"></i> 1 minute ago</p>
              </div>

              <Message image={props.image}/>
          <div class="panel-footer">
              <div class="input-group">
              <input type="text" placeholder="Press Enter" class="form-control primary" />
                  <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">Send</button>
                  </span>
              </div>
          </div>
      </div>
  </div>
  </div>
    )
}

export default Dialogs;