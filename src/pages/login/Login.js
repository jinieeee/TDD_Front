import { KAKAO_AUTH_URL } from '../login/KakaoAuth';


function Login() {

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div>
            <h1>소셜 로그인</h1>
            <a onClick={kakaoLogin}>
                <img src="/img/login/kakao_login_medium_wide.png"/>
            </a>
        </div>
    )
}

export default Login;