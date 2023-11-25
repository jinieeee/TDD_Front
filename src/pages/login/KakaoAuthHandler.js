import axios from "axios" 
import { useEffect } from "react"
import styled from 'styled-components'

const kakaoLoginConfig = {
    callbackUri: process.env.REACT_APP_KAKAO_CALLBACK_URI,
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const KakaoAuthHandler = (props) => {
    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get('code')
        const kakaoLogin = async () => {
            await axios
            .get(`${kakaoLoginConfig.callbackUri}/user/kakao/callback?code=${code}`)
            .then((res) => {
                localStorage.setItem("Authorization", res.headers.authorization);
                window.location.href = "/main";
            })
        }
            kakaoLogin();
        }, [props.history])

    return (
        <>
        <Container>
            <h3>잠시만 기다려 주세요! 로그인 중입니다.</h3>
        </Container>
        </>
    )
}

export default KakaoAuthHandler;