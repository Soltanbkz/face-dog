import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import "./ProfileInfo.css";


const ProfileInfo = ({ firstName, lastName }) => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Загрузка изображения из локального хранилища при монтировании компонента
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);

    // Сохранение изображения в локальном хранилище
    localStorage.setItem('profileImage', imageUrl);

    setProfileImage(imageUrl);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="fb-profile-block">
            <div className="fb-profile-block-thumb cover-container"></div>
            <div className="profile-img">
              <a href="#">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" title="Profile" />
                ) : (
                  <img src="https://yt3.ggpht.com/a/AGF-l7-RxjVqCUoTLpWWQBCFBfCCLTu8WehDLT6MQA=s900-c-k-c0xffffffff-no-rj-mo" alt="" title="" />
                )}
              </a>
            </div>
            <div className="profile-name">
              <h2>{firstName} {lastName}</h2>
            </div>
            <div className="fb-profile-block-menu">
              <input type="file" className="form-control" onChange={handleImageChange} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
