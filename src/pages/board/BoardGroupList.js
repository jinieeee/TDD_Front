import {useEffect, useState} from "react";
import restApi from "../../api/restApi";
import {Link} from "react-router-dom";
import {format} from "date-fns";

const BoardGroupList = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const boardGroupList = async () => {
        try {
            const {data} = await restApi('get', '/group/all')
            setLoading(false);
            setData(data);
        } catch (error) {
            // 오류 처리
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
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
                                            {format(item.sysRegDtime, 'yyyy.MM.dd')}
                                        </time>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <Link to={`/group/${item.groupId}`} key={item.groupId}>
                                                <span className="absolute inset-0" />
                                                {item.groupName}
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a>
                                                    <span className="absolute inset-0" />
                                                    작성자입니다.
                                                </a>
                                            </p>
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