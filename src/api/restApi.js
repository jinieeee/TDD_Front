import axios from "axios";
import {useSelector} from "react-redux";
import localStorage from "redux-persist/es/storage";

const urlConfig = {
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL
}
export default async (type, url, data) => {
    const auth = await localStorage.getItem("Authorization")

    switch (type) {
        case 'post': {
            return await axios.post(`${urlConfig.baseURL}${url}`, data, {
                headers: {
                    Authorization: auth,
                }
            })
        }
        case 'get': {
            return await axios.get(`${urlConfig.baseURL}${url}`, {
                headers: {
                    Authorization: auth,
                }
            })
        }
        case 'put': {
            return await axios.put(`${urlConfig.baseURL}${url}`, data,{
                headers: {
                    Authorization: auth,
                }
            })
        }
        case 'delete': {
            return await axios.delete(`${urlConfig.baseURL}${url}`, {
                headers: {
                    Authorization: auth,
                }
            })
        }
        default: return
    }
}