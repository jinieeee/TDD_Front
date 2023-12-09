import { createAction, handleActions} from "redux-actions";
import { produce } from 'immer';
import {createRequestActionTypes} from "../lib/createRequestSaga";

// 모듈 이름/액션 이름 형식
const [LOGIN] = createRequestActionTypes('auth/LOGIN');

// 액션 생성 함수
export const login = createAction(LOGIN, ({ auth }) => ({
    auth
}));

const initialState = {
    auth: null,
    authError: null,
};

// 액션 업데이트 함수
const auth = handleActions(
    {
        [LOGIN]: (state, { payload: { auth }}) => (
            {
            ...state,
            authError: null,
            auth,
        }),
    },
    initialState,
);

export default auth;