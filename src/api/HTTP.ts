import Axios, { AxiosPromise } from 'axios';

export const restVersion: number = 1;
export const restURL: string = `http://127.0.0.1:5000`;
export const restEndpoints: any = {
    main: {
        _: `/api/v${restVersion}`
    },
    data: {
        get: {
            getUserByID: `/api/v${restVersion}/get/me/user` // :id
        }
    }
}

export async function getUser(token: string, id: string): Promise<any> {
    const _r: AxiosPromise<any> | any = await Axios({
        method: "POST",
        url: `${restURL}${restEndpoints.data.get.getUserByID}/${id}`,
        data: JSON.stringify({
            token,
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "include",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Accept, Accept-Language, Content-Type"
        }
    });

    // eslint-disable-next-line
    if(!_r || (_r && !_r.data || (_r.data && _r.data.exited_code !== 0 || !(_r.data.data)))) {
        return null;
    }

    window.sessionStorage.setItem("camxa-oauth-session-data", JSON.stringify(_r.data.data));

    return _r.data.data;
}
