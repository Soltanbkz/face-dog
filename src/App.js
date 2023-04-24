import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Settings from './components/Settings/Settings';
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo';
import React, { useState } from 'react';


const App = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFormSubmit = (fName, lName) => {
    setFirstName(fName);
    setLastName(lName);
  };
  return (
    <Main>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/' element={<Profile 
                  profilePage={props.state.profilePage}
                  name={props.state.settings}
                  dispatch={props.dispatch}
                  firstName={firstName}
                   lastName={lastName}
                  />} />
            <Route exact path='/dialogs/*' element={<Dialogs image={localStorage.getItem('profileImage')}   />} />
            <Route exact path='/music/*' element={<Music />} />
            <Route exact path='/settings/*' element={<Settings onFormSubmit={handleFormSubmit} />} />
          </Routes>
        </div>
    </div>
    </Main>
  );
}

export default App;
