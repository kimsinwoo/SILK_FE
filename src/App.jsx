import './App.css';
import {Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import LoginHeader from './components/LoginHeader'
import MainPage from './components/MainPage'
import Upload from './components/Upload'
import Profile from './components/Profile'
import Chat from './components/Chat'
import Login from './components/Login'
import { useState } from 'react';


function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={
            <div>
              <LoginHeader isLogin={isLogin}/>
              <Header isLogin={isLogin} />
              <MainPage />
            </div>
          } />
          <Route path="/upload" element={
            <div>
              <LoginHeader isLogin={isLogin}/>
              <Header isLogin={isLogin} />
              <Upload />
            </div>
          } />
          <Route path="/profile" element={
            <div>
              <LoginHeader isLogin={isLogin}/>
              <Header isLogin={isLogin} />
              <Profile />
            </div>
          } />
          <Route path="/chat" element={
            <div>
              <LoginHeader isLogin={isLogin}/>
              <Header isLogin={isLogin} />
              <Chat />
            </div>
          } />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
