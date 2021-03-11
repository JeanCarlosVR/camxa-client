import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, composeEnhancers } from './redux/Store';
import Thunk from 'redux-thunk';

import { getTheme }from './util/Stylesheet';

import App from './App';

let theme: any = window.localStorage.getItem("camxa-theme");
if(!theme) {
    window.localStorage.setItem("camxa-theme", JSON.stringify({
        name: "white",
        lastUpdated: Date.now()
    }));
    

    theme = {
        name: "dark",
        lastUpdated: Date.now()
    }
} else {
    theme = JSON.parse(theme);
    if(!theme.name) theme.name = "dark";
}

if(theme.name === "dark") {
    for(let style of getTheme(theme.name)) {
        require(`${style}`);
    }
} else if(theme.name === "white") {
    for(let style of getTheme(theme.name)) {
        require(`${style}`);
    }
} else {
    for(let style of getTheme("dark")) {
        require(`${style}`);
    }
}


ReactDOM.render(
    <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)))}>
        <App />
    </Provider>,
    document.getElementById('content')
);