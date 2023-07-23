import './App.css';
import Login from './pages/login/Login'
import Home from './pages/Home'
import KakaoAuthHandler from './pages/login/KakaoAuthHandler'
import { Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }></Route>
      <Route path="/login" element={ <Login /> }></Route>
      <Route exact path="/user/kakao/callback" element={ <KakaoAuthHandler /> }></Route>
      <Route path="/main" element={ <Home /> }></Route>
    </Routes>
  );
}

export default App;
