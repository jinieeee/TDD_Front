import './App.css';
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import KakaoAuthHandler from './pages/login/KakaoAuthHandler'
import { Routes, Route } from 'react-router-dom'
import {useState} from "react";
import Layout from "./components/common/Layout";

function App() {
    const [user, setUser] = useState(null);

  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={ <Login /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>
            <Route exact path="/user/kakao/callback" element={ <KakaoAuthHandler /> }></Route>
            <Route path="/main" element={ <Main /> }></Route>
        </Route>
    </Routes>
  );
}

export default App;
