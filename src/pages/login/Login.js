import { KAKAO_AUTH_URL } from '../login/KakaoAuth';
import {Divider} from "../../components/atoms/divider";
import {lineThin} from "../../stories/Divider.stories";


function Login() {

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mb-5">
                    <Divider variant="lineThin">continue with</Divider>
                </div>
                <div>
                    <a onClick={kakaoLogin}>
                        <img
                            className="mx-auto h-10 w-auto"
                            src="/img/login/kakao_login_medium_wide.png"
                            alt="Kakao Login"/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Login;
