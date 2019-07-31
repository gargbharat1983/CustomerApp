import { combineReducers } from 'redux';
import customers from './customerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
    customers,
    ajaxCallsInProgress
});
export default rootReducer;