import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Main>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/' element={<Profile />} />
            <Route exact path='/dialogs/*' element={<Dialogs />} />
          </Routes>
        </div>
    </div>
    </Main>
  );
}


export default App;