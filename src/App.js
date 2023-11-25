import './App.css';
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import KakaoAuthHandler from './pages/login/KakaoAuthHandler'
import { Router, Routes, Route } from 'react-router-dom'
import {useState} from "react";

function App() {
    const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={ <Login /> }></Route>
      <Route path="/login" element={ <Login /> }></Route>
      <Route exact path="/user/kakao/callback" element={ <KakaoAuthHandler /> }></Route>
      <Route path="/main" element={ <Main /> }></Route>
    </Routes>
  );
}

export default App;
