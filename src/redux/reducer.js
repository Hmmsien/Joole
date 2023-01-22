import { Types } from './action-type';

const initialState = {
    isAuthUser: !!localStorage.getItem("token"),
    loading: false,
    token: null,
    user: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Types.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.token,
                user: action.user,
                isAuthUser: !!localStorage.getItem("token"),
            };
        case Types.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
