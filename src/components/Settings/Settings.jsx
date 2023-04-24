import React, { useState, useRef } from 'react';
import './Settings.css'; // Импортируем файл со стилями
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';

const Settings = ({ onFormSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const firstName = fNameRef.current.value;
    const lastName = lNameRef.current.value;
    const email = emailRef.current.value; // Получаем значение поля Email
    onFormSubmit(firstName, lastName, email); // Передаем значения в функцию onFormSubmit
  }

  return (
    <>
      <div className="container">
        <h1 className="text-primary">Edit Profile</h1>
        <hr />
        <div className="row">

          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <a className="panel-close close" data-dismiss="alert">×</a>
              <i className="fa fa-coffee"></i>
              Enter Info about you
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="col-lg-3 control-label">First name:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" ref={fNameRef} defaultValue="First Name"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Last name:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" ref={lNameRef} defaultValue="Last Name"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" ref={emailRef} defaultValue="YourEmail@gmail.com" />
                </div>
              </div>
              <div className="form-group mt-5 col-lg-8">
                <button className="form-control" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Settings;
