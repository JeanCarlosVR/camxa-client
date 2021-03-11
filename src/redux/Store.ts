import { combineReducers, compose } from 'redux';
import UserDuck from './ducks/UserDuck';

//@ts-ignore
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const rootReducer = combineReducers({
    user: UserDuck
});