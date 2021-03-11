import { getUser } from '../../api/HTTP';

export const defaultData = {
    userFetched: false,
    user: null
}

export const getUserString = "GET_USER";
export const createUserString = "CREATE_USER";

export default function reducer(state = defaultData, action: any) {
    switch(action.type) {
        case getUserString:
            return {...state, user: action.payload}
        default:
            return state
    }
}

export const getUserAction = (token: string, id: string) => async (dispatch: any, getState: any) => {
    let _r = await getUser(token, id);

    dispatch({
        type: getUserString,
        payload: {
            userFetched: true,
            user: _r,
        }
    });

    return _r;
}