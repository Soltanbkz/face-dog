import "./Music.css";
import Amplitude from 'amplitudejs';


export let Music = () => {
  return(
    <div class="container">
    <div id="content" class="content p-0">
        
    
        <div class="profile-container">
            <div class="row row-space-20">
                <div class="col-md-8">
                    <div class="tab-content p-0">
                        <div class="tab-pane active show" id="profile-videos">
                            <div class="m-b-10"><b>Videos (15)</b></div>
    
                            <div class="row row-space-2">
                                <div class="col-sm-8">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3Kf-FlECN7M?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/izsjRpcgfmk?showinfo=0"></iframe>
                                    </div>
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/j876xgnTVUg?showinfo=0"></iframe>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row row-space-2">
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wUqH_5memWY?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wXmu-EYAmKU?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/xS1DghfzuMc?showinfo=0"></iframe>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row row-space-2">
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v3ZkCLUFrys?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/toPm-L7Ib44?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qD8OnPC1fLI?showinfo=0"></iframe>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row row-space-2">
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Guo7gR0XyaU?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ADfIlLfs5Bk?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8Wg1MYjOguI?showinfo=0"></iframe>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row row-space-2">
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LbpHB9wbDhY?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oVWBFkaXMyw?showinfo=0"></iframe>
                                    </div>
                                </div>
    
                                <div class="col-sm-4">
                                    <div class="embed-responsive embed-responsive-16by9 m-b-2">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/90PRvlhOLSk?showinfo=0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 hidden-xs hidden-sm">
                    <ul class="profile-info-list">
                        <li class="title">PERSONAL INFORMATION</li>
                        <li>
                            <div class="field">Occupation:</div>
                            <div class="value">UXUI / Frontend Developer</div>
                        </li>
                        <li>
                            <div class="field">Skills:</div>
                            <div class="value">BOOTSRTAP, HTML, JS, CSS, PYTHON</div>
                        </li>
                        <li>
                            <div class="field">Birth of Date:</div>
                            <div class="value">1989/11/04</div>
                        </li>
                        <li>
                            <div class="field">Country:</div>
                            <div class="value">San Francisco</div>
                        </li>
                        <li>
                            <div class="field">Address:</div>
                            <div class="value">
                                <address class="m-b-0">
                                    Twitter, Inc.<br />
                                    1355 Market Street, Suite 900<br />
                                    San Francisco, CA 94103
                                </address>
                            </div>
                        </li>
                        <li>
                            <div class="field">Phone:</div>
                            <div class="value">
                                +7 (707) 488 09 31
                            </div>
                        </li>
                        <li class="title">FRIEND LIST (9)</li>
                        <li class="img-list">
                            <a href="#" class="m-b-5"><img src="https://lamedi.ru/uploads/user_image/4.jpg" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://avatars.mds.yandex.net/i?id=1f03329af7c5dddbe9b06e49c3bac1da-5878076-images-thumbs&ref=rim&n=33&w=169&h=169" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://avatars.mds.yandex.net/i?id=1f03329af7c5dddbe9b06e49c3bac1da-5878076-images-thumbs&ref=rim&n=33&w=169&h=169" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://lamedi.ru/uploads/user_image/4.jpg" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://avatars.mds.yandex.net/i?id=1f03329af7c5dddbe9b06e49c3bac1da-5878076-images-thumbs&ref=rim&n=33&w=169&h=169" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://lamedi.ru/uploads/user_image/4.jpg" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://lamedi.ru/uploads/user_image/4.jpg" alt="" /></a>
                            <a href="#" class="m-b-5"><img src="https://avatars.mds.yandex.net/i?id=1f03329af7c5dddbe9b06e49c3bac1da-5878076-images-thumbs&ref=rim&n=33&w=169&h=169" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}