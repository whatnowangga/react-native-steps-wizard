import { combineReducers } from 'redux';
import StepIndexReducer from './StepsReducer';


export default combineReducers({
    steps : StepIndexReducer
});