import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './redux/ducks/UserDuck';

import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
    const dispatch = useDispatch();

    const _token = window.localStorage.getItem("camxa-oauth-token");
    const _id = window.localStorage.getItem("camxa-oauth-id");

    useEffect(() => {
        setTimeout(() => {
            if(_token && _id) {
                dispatch(getUserAction(_token, _id));
            }
        }, 2000);
    }, [_id, _token, dispatch]);

    let userStore = useSelector((store: any) => store.user);
    if(userStore.user) userStore = userStore.user;

    return(
        <React.Fragment>
            <Router history={createBrowserHistory()}>
                <Menu user={userStore.user} userFetched={userStore.userFetched} />
                <h1>Hello {userStore.user && userStore.user.id ? userStore.user.name : "unknown"} to Camxa</h1>
                <Footer />
            </Router>
        </React.Fragment>
    );
}