const kakaoLoginConfig = {
    authorizationUri : process.env.REACT_APP_KAKAO_AUTHORIZATION_URI,
    clientId : process.env.REACT_APP_KAKAO_CLIENT_ID,
    redirectUri : process.env.REACT_APP_KAKAO_REDIRECT_URI,
    
}

export const KAKAO_AUTH_URL =  `${kakaoLoginConfig.authorizationUri}?client_id=${kakaoLoginConfig.clientId}&redirect_uri=${kakaoLoginConfig.redirectUri}&response_type=code`

