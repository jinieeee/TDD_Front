import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const urlConfig = {
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL
}
const BoardGroupList = (props) => {
    const { auth } = useSelector(({ auth }) => ({
        auth: auth.auth,
    }));

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const boardGroupList = async () => {
            await axios
                .post(`${urlConfig.baseURL}/group/all`, null, {
                    headers: {
                        Authorization : auth,
                    }
                })
                .then((res) => {
                    setLoading(false);
                    setData(res.data);
                })
                .catch((error) => {
                    // 오류 처리
                    console.error(error);
                    setLoading(false);
                })
        }
        boardGroupList();

    }, []);

    if(loading || data == null) {
        return null;
    } else {
        return (
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {data.map((item) => (
                            <article key={item.groupId} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="items-center mb-7 rounded-2xl overflow-hidden h-52">
                                    <img className="object-cover" src={item.thumbImgUrl}  alt="thumbnail"/>
                                </div>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time className="text-gray-500">
                                        yyyy년 MM월 dd일
                                    </time>
                                    <a
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        블로그 카테코리입니다.
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={item.href}>
                                            <span className="absolute inset-0" />
                                            타이틀입니다.
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">블로그 상세 내용 / 블로그 상세 내용 / 블로그 상세 내용</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {/*<img src={item.thumbImgUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a>
                                                <span className="absolute inset-0" />
                                                작성자입니다.
                                            </a>
                                        </p>
                                        {/*<p className="text-gray-600">{item.author.role}</p>*/}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default BoardGroupList;